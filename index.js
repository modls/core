import { svg, html, render } from "lighterhtml";


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
  _mounted = false;
  _state = {};
  _props = {};

  get props() {
    return deepFreeze({ ...this._props });
  }
  get state() {
    return deepFreeze({ ...this._state });
  }
  static get props() {
    return {};
  }
  static get state() {
    return {};
  }
  static get observedAttributes() {
    var copy = Object.keys(this.props).map((name) => name.toLowerCase());
    return [...Object.keys(this.props), copy];
  }
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
    this.setState({ ...this.constructor.state });
    if (props) {
      this.setState({ ...state });
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
    if (this._mounted) {
      this.render();
    }
  }
  _setProps(obj, withoutSet) {
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
        if (!withoutSet) {
          this.setAttribute(name, value);
        }
        this._props[name] = value;
      }
    }
    if (this._mounted) {
      this.render();
    }
  }
  setState(obj) {
    for (var name in obj) {
      if (obj.hasOwnProperty(name) && name in this.constructor.state) {
        this._state[name] = obj[name];
      }
    }
    if (this._mounted) {
      this.render();
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var oldProps = deepFreeze({ ...this.props });
    this._setProps({ [name]: newValue }, true);
    var newProps = deepFreeze({ ...this.props });
    if (typeof this.onAttributeChanged !== "undefined") {
      this.onAttributeChanged(oldProps, newProps);
    }
    if (this._mounted) {
      this.render();
    }
  }
  connectedCallback() {
    this._mounted = true;
    for (var prop in this.props) {
      if (this.props.hasOwnProperty(prop)) {
        if (!this.hasAttribute(prop) && (typeof this.props[prop] !== 'object' || typeof this.props[prop] !== 'function')) {
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
    this._mounted = false;
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
