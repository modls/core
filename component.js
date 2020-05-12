if (!lighterhtml) {
  lighterhtml = require("https://unpkg.com/lighterhtml?module");
}
const html = lighterhtml.html;
const render = lighterhtml.render;

export default class Component extends HTMLElement {
  _shadowRoot = null;
  _methods = {};
  _vars = {};
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.render = render.bind(null, this._shadowRoot, this.render.bind(this));
    this.render();
  }
  addEventListener(name, func) {
    for (var methodName in this._methods) {
      if (this._methods.hasOwnProperty(methodName)) {
        if (methodName.toLowerCase() === "on" + name.toLowerCase()) {
          this._setMethod(methodName, func);
        }
      }
    }
  }
  removeEventListener(name) {
    for (var methodName in this._methods) {
      if (this._methods.hasOwnProperty(methodName)) {
        if (methodName.toLowerCase() === "on" + name.toLowerCase()) {
          this._setMethod(methodName, () => {});
        }
      }
    }
  }
  _setMethod(name, func) {
    this._methods[name] = func.bind(this);
    this.render();
  }
  _setVars(name, value) {
    this._vars[name] = value;
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.onAttributeChanged) {
      this.onAttributeChanged(name, oldValue, newValue);
    }
    this.render();
  }
  connectedCallback() {
    for (var varName in this._vars) {
      if (this._vars.hasOwnProperty(varName)) {
        if (!this.hasAttribute(varName)) {
          this.setAttribute(varName, this._vars[varName]);
        }
      }
    }
    if (this.onMount) {
      this.onMount();
    }
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
