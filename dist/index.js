import { svg, html, render } from "https://unpkg.com/lighterhtml@^3.1.3?module";

class BaseWebComponent extends HTMLElement {
  _shadowRoot = null;
  _events = {};
  _mounted = false;
  _state = {};
  _props = {};

  get props() {
    return { ...this._props };
  }
  get state() {
    return { ...this._state };
  }
  static get props() {
    return {};
  }
  static get state() {
    return {};
  }
  static get observedAttributes() {
    var copy = Object.keys(this.props).map((name) => name.toLowerCase());
    return [...new Set([...Object.keys(this.props), ...copy])];
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
  _setProps(obj, fromAttr) {
    var oldProps = { ...this.props };
    for (var objName in obj) {
      let name = Object.keys(this.constructor.props).find(
        (_name) => _name.toLowerCase() === objName.toLowerCase()
      );
      if (!name) {
        continue;
      }
      if (
        obj.hasOwnProperty(objName) &&
        name in this.constructor.props &&
        fromAttr
      ) {
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
          value = currentValue.toLowerCase() === "true" || currentValue === "1";
        }
        this._props[name] = value;
      }
    }
    var newProps = { ...this.props };
    if (!fromAttr) {
      if (typeof this.onAttributeChanged !== "undefined") {
        this.onAttributeChanged(oldProps, newProps);
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
    var oldProps = { ...this.props };
    this._setProps({ [name]: newValue }, true);
    var newProps = { ...this.props };
    if (typeof this.onAttributeChanged !== "undefined") {
      this.onAttributeChanged(oldProps, newProps);
    }
    if (this._mounted) {
      this.render();
    }
  }
  connectedCallback() {
    this._mounted = true;
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
