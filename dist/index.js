import { custom } from "https://unpkg.com/lighterhtml@^3.1.3?module";
import { deepEqual as equal } from "https://unpkg.com/fast-equals@^2.0.0?module";

const { svg, html, render } = custom({
  attribute(callback) {
    return (node, name, original) => {
      if (node instanceof BaseWebComponent && name !== "ref")
        return (value) => {
          node._setProps({ [name]: value }, node.__mounted);
        };
      if (node instanceof BaseWebComponent && name === "ref") {
        return (value) => {
          callback.apply(this, [node, name, original])(value);
          node.__ref = true;
          if (node.__mounted && node != value.current) {
            node.forceUpdate();
          }
        };
      }
      return callback.apply(this, [node, name, original]);
    };
  },
});

export const safeFetch = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(...arguments);
      if (!response.ok) {
        let err = new Error("HTTP status code: " + response.status);
        err.response = response;
        err.status = response.status;
        throw err;
      }
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};

class BaseWebComponent extends HTMLElement {
  _mounted() {
    return !!this.__mounted;
  }
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
    this.__ref = false;
    this.__mounted = false;
    this._state = {};
    this._props = {};
    this.__propsInitial = {};
    this._setProps({ ...this.constructor.props }, false);
    if (props) {
      this._setProps({ ...props }, false);
    }
    this.setState({ ...this.constructor.state }, false);
    if (props) {
      this.setState({ ...state }, false);
    }
    if (
      typeof this.constructor.disableShadowDOM === "function"
        ? this.constructor.disableShadowDOM()
        : this.constructor.disableShadowDOM
    ) {
      this.render = render.bind(null, this, this.render.bind(this));
      this.style.display = "contents";
    } else {
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this.render = render.bind(null, this._shadowRoot, this.render.bind(this));
    }
  }
  _setProps(obj, render = true) {
    var oldProps = { ...this.props };
    for (var objName in obj) {
      let name = Object.keys(this.constructor.props).find(
        (_name) => _name.toLowerCase() === objName.toLowerCase()
      );
      if (!name) {
        continue;
      }
      if (obj.hasOwnProperty(objName) && name in this.constructor.props) {
        let value = obj[objName];
        let originalValueType =
          name in this.__propsInitial
            ? typeof this.__propsInitial[name]
            : typeof this.constructor.props[name];
        if (
          typeof this.constructor.props[name] === null &&
          !(name in this.__propsInitial) &&
          value !== null
        ) {
          this.__propsInitial[name] = typeof value;
          originalValueType = this.__propsInitial[name];
        }
        let currentValue =
          typeof this.props[name] === "undefined"
            ? this.constructor.props[name]
            : this.props[name];
        let currentValueType = typeof currentValue;
        if (
          (typeof value !== currentValueType && value !== null) ||
          typeof value !== originalValueType
        ) {
          throw new Error(
            "Property cannot be changed in another type. Type: ",
            currentValue === null ? originalValueType : currentValueType,
            "Received: ",
            typeof value
          );
        }
        this._props[name] = value;
      }
    }
    var newProps = { ...this.props };
    if (!equal(oldProps, newProps) && render) {
      if (typeof this.onPropsChanged !== "undefined") {
        this.onPropsChanged(oldProps, newProps);
      }
      this.forceUpdate();
    }
  }
  forceUpdate(force) {
    if (force === true || this._mounted()) {
      if (this.__ref) {
        let parentElement = this.parentElement;
        while (parentElement) {
          if (parentElement instanceof BaseWebComponent) {
            parentElement.forceUpdate();
            break;
          }
          parentElement = parentElement.parentElement;
        }
        let hostElement = this.getRootNode().host;

        while (hostElement) {
          if (hostElement instanceof BaseWebComponent) {
            hostElement.forceUpdate();
            break;
          }
          hostElement = this.getRootNode().host;
        }
      }
      this.render();
    }
  }
  setState(obj, render = true) {
    let oldState = { ...this.state };
    for (var name in obj) {
      if (obj.hasOwnProperty(name) && name in this.constructor.state) {
        this._state[name] = obj[name];
      }
    }
    var newState = { ...this.state };
    if (!equal(oldState, newState) && render) {
      this.forceUpdate();
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (typeof newValue === "string") {
      name = Object.keys(this.props).find(
        (_name) => _name.toLowerCase() === name.toLowerCase()
      );
      if (typeof this.props[name] !== "string") {
        newValue = JSON.parse(newValue);
      }
    }
    this._setProps({ [name]: newValue }, this.__mounted);
  }
  connectedCallback() {
    if (this.onMount) {
      this.onMount();
    }
    this.__mounted = true;
    this.forceUpdate(true);
  }

  disconnectedCallback() {
    if (this.onUnmount) {
      this.onUnmount();
    }
    this.__mounted = false;
  }

  render() {
    return html`<div></div>`;
  }
}
export default BaseWebComponent;
export { BaseWebComponent, svg, html, render };
