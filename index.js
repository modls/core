import { custom } from "lighterhtml";
import { deepEqual as equal } from "fast-equals";
if (window && window.HTMLCollection) {
  HTMLCollection.prototype.map = Array.prototype.map;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}
if (window && window.NodeList) {
  NodeList.prototype.map = Array.prototype.map;
  NodeList.prototype.forEach = Array.prototype.forEach;
}
export const { svg, html, render } = custom({
  attribute(callback) {
    return (node, name, original) => {
      if (node instanceof Component && name !== "ref") {
        return (value) => {
          node._setProps({ [name]: value });
        };
      }
      if (node instanceof Component && name === "ref") {
        return (value) => {
          callback.apply(this, [node, name, original])(value);
          node.__ref = true;
          if (node != value.current) {
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

let _contents = [];

export class Component extends HTMLElement {
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
  static get hooks() {
    if (!this.__hooks) {
      this.__hooks = [];
    }
    return this.__hooks;
  }
  static addHook(hook) {
    if (!this.__hooks) {
      this.__hooks = [];
    }
    this.__hooks.push(hook);
  }
  static register(classObjectOrTagName = null, tagName = null) {
    const toKebabCase = (str) =>
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
        )
        .map((x) => x.toLowerCase())
        .join("-");
    let classObject = this;
    if (typeof classObjectOrTagName === "string") {
      tagName = classObjectOrTagName;
    } else if (typeof classObjectOrTagName === "function") {
      classObject = classObjectOrTagName;
    }

    if (tagName === null) {
      tagName = "modls-" + toKebabCase(classObject.name);
    }

    if (!tagName.includes("-")) {
      tagName = "modls-" + tagName;
    }
    window.customElements.define(tagName.toLowerCase(), classObject);
  }
  static get observedAttributes() {
    var copy = Object.keys(this.props).map((name) => name.toLowerCase());
    return [...new Set([...Object.keys(this.props), ...copy, "modls-id"])];
  }
  constructor(props, state) {
    super();

    this.__ref = false;
    this.__mounted = false;
    this._state = {};
    this._props = {};
    this.__propsInitial = {};
    this._setProps({ ...this.constructor.props });
    if (props) {
      this._setProps({ ...props });
    }
    this.setState({ ...this.constructor.state });
    if (props) {
      this.setState({ ...state });
    }
    this.constructor.hooks.forEach((hook) => {
      hook(this);
    });
    if (!this.hasAttribute("modls-id")) {
      let contents = document.createElement("template");
      contents.innerHTML = this.innerHTML.trim();
      this._contents = contents.content.childNodes;
      _contents.push(this._contents.map((n) => n.cloneNode(true)));
      this.setAttribute("modls-id", _contents.length - 1);
    } else {
      this._contents = _contents[this.getAttribute("modls-id")].map((n) =>
        n.cloneNode(true)
      );
    }
    this._renderMethod();
    this.innerHTML = "";
  }
  _renderMethod() {
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.render = render.bind(null, this._shadowRoot, this.render.bind(this));
  }
  get contents() {
    return this._contents.length
      ? this._contents.map((n) => n.cloneNode(true))
      : [];
  }
  _setProps(obj) {
    var oldProps = { ...this.props };
    for (var objName in obj) {
      let name = Object.keys(this.constructor.props).find(
        (_name) => _name.toLowerCase() === objName.toLowerCase(),
      );
      if (!name) {
        continue;
      }
      if (obj.hasOwnProperty(objName) && name in this.constructor.props) {
        let value = obj[objName];
        let originalValueType = name in this.__propsInitial
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
        let currentValue = typeof this.props[name] === "undefined"
          ? this.constructor.props[name]
          : this.props[name];
        let currentValueType = typeof currentValue;
        if (
          (typeof value !== currentValueType && value !== null) ||
          typeof value !== originalValueType
        ) {
          throw new Error(
            [
              'Property "',
              name,
              '" cannot be changed in another type. Type: "',
              currentValue === null ? originalValueType : currentValueType,
              '" Received: "',
              typeof value,
              '"',
            ].join(""),
          );
        }
        this._props[name] = value;
      }
    }
    var newProps = { ...this.props };
    if (!equal(oldProps, newProps)) {
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
          if (parentElement instanceof Component) {
            parentElement.forceUpdate();
            break;
          }
          parentElement = parentElement.parentElement;
        }
        let hostElement = this.getRootNode().host;

        while (hostElement) {
          if (hostElement instanceof Component) {
            hostElement.forceUpdate();
            break;
          }
          hostElement = this.getRootNode().host;
        }
      }
      this.render();
    }
  }
  setState(obj) {
    let oldState = { ...this.state };
    for (var name in obj) {
      if (obj.hasOwnProperty(name) && name in this.constructor.state) {
        this._state[name] = obj[name];
      }
    }
    var newState = { ...this.state };
    if (!equal(oldState, newState)) {
      this.forceUpdate();
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name !== "modls-id") {
      if (typeof newValue === "string") {
        name = Object.keys(this.props).find(
          (_name) => _name.toLowerCase() === name.toLowerCase(),
        );
        if (typeof this.props[name] !== "string") {
          try {
            newValue = JSON.parse(newValue);
          } catch (e) { }
        }
      }
      this._setProps({ [name]: newValue });
    }
  }
  connectedCallback() {
    if (this.onMount) {
      this.onMount();
    }
    this.__mounted = true;
    this.forceUpdate();
    if (this.onInitialRender) {
      this.onInitialRender();
    }
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

export class RawComponent extends Component {
  _renderMethod() {
    this.render = render.bind(null, this, this.render.bind(this));
    this.style.display = "contents";
  }
}

export const registerComponent = (component, tagName = null) => {
  if (component.prototype instanceof Component) {
    component.register(tagName);
    return component;
  }
  return component;
};
