import { svg, html, render } from "http://unpkg.com/uhtml@^1.11.6?module";

const unfreeze = (o) => {
  var oo = undefined;
  if (o instanceof Array) {
    oo = [];
    var clone = function (v) {
      oo.push(v);
    };
    o.forEach(clone);
  } else if (o instanceof String) {
    oo = new String(o).toString();
  } else if (typeof o == "object") {
    oo = {};
    for (var property in o) {
      oo[property] = o[property];
    }
  }
  return oo;
};

const deepUnfreeze = (object) => {
  var obj = unfreeze(object);
  var propNames = Object.getOwnPropertyNames(obj);
  for (let name of propNames) {
    let value = obj[name];

    if (value && typeof value === "object") {
      value = deepUnFreeze(value);
    }
  }

  return obj;
};

const deepFreeze = (object) => {
  var propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
};

class BaseWebComponent extends HTMLElement {
  _shadowRoot = null;
  _events = {};
  state = {};

  get props() {
    return deepFreeze({ ...this._props });
  }
  static get props() {
    return {};
  }
  static get observedAttributes() {
    var copy = Object.keys(this.props).map((name) => name.toLowerCase());
    return [...Object.keys(this.props), copy];
  }
  _props = {};
  constructor(props, state) {
    super();
    if (this.constructor.disableShadowDOM) {
      this.render = render.bind(null, this, this.render.bind(this));
    } else {
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this.render = render.bind(null, this._shadowRoot, this.render.bind(this));
    }
    this._setProps({ ...this.constructor.props });
    if (props) {
      this._setProps({ ...props });
    }
    this.getAttributeNames().forEach((attrName) => {
      for (var name in this.props) {
        if (this.props.hasOwnProperty(name)) {
          if (attrName.toLowerCase() == name.toLowerCase()) {
            this._setProps({ [name]: this.getAttribute(attrName) });
            break;
          }
        }
      }
    });
    if (state) {
      this.setState({ ...state });
    }

    this.render();
  }
  addEventListener(name, func) {
    var events = [...this._events];
    name = name.toLowerCase();
    if (name in events) {
      events[name] = [];
    }
    events[name].push(func.bind(this));
    this._setEvent({ [name]: [...events[name]] });
  }
  removeEventListener(name) {
    var events = [...this._events];
    name = name.toLowerCase();
    if (name in events) {
      this._setEvent({ [name]: [] });
    }
  }
  trigger(name, data) {
    var events = [...this._events];
    name = name.toLowerCase();
    if (name in events) {
      for (var i = 0; i < events[name].length; i++) {
        events[name][i](data);
      }
    }
  }
  _setEvent(obj) {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        this._events[name] = [...obj[name]];
      }
    }
    this.render();
  }
  _setProps(obj) {
    for (var objName in obj) {
      let name = Object.keys(this.constructor.props).find(
        (_name) => _name.toLowerCase() === objName.toLowerCase()
      );
      if (!name) {
        continue;
      }
      if (obj.hasOwnProperty(objName) && name in this.constructor.props) {
        let currentValue =
          typeof this.props[name] === "undefined"
            ? this.constructor.props[name]
            : this.props[name];
        let value = obj[objName];
        if (typeof currentValue === "number" && typeof value === "string") {
          value = parseFloat(value);
        } else if (
          (typeof currentValue === "array" ||
            typeof currentValue === "object") &&
          typeof value === "string"
        ) {
          value = JSON.parse(value);
        } else if (
          typeof currentValue === "boolean" &&
          typeof value === "string"
        ) {
          value = currentValue === "true";
        }
        this._props[name] = value;
      }
    }
    this.render();
  }
  setState(obj) {
    this.state = deepUnfreeze(this.state);
    for (var name in obj) {
      if (obj.hasOwnProperty(name) && name in this.state) {
        this.state[name] = obj[name];
      }
    }
    this.state = deepFreeze(this.state);
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var oldProps = deepFreeze({ ...this.props });
    this._setProps({ [name]: newValue });
    var newProps = deepFreeze({ ...this.props });
    if (typeof this.onAttributeChanged !== "undefined") {
      this.onAttributeChanged(oldProps, newProps);
    }
    this.render();
  }
  connectedCallback() {
    for (var prop in this.props) {
      if (this.props.hasOwnProperty(prop)) {
        if (!this.hasAttribute(prop)) {
          this.setAttribute(prop, this.props[prop]);
        }
      }
    }
    if (this.onMount) {
      this.onMount();
    }
    this.render();
  }

  disconnectedCallback() {
    if (this.onUnmount) {
      this.onUnmount();
    }
  }

  render() {
    return html`<div></div>`;
  }
}
export default BaseWebComponent;
export { BaseWebComponent, svg, html, render };
