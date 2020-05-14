import BaseWebComponent, { html } from "../dist/index.js";

export default class ExampleClass extends BaseWebComponent {
  static get props() {
    return { startFrom: 0 };
  }
  static get state() {
    return {
      number: 0,
    };
  }
  onMount() {
    console.log("Mounted");
    this.setState({ number: this.props.startFrom });
  }
  onAttributeChanged(oldProps, newProps) {
    console.log(oldProps, newProps);
  }
  onUnmount() {
    console.log("Unmounted");
  }
  updateNumber() {
    if (this.state.number === 10) {
      this.remove();
    } else {
      this.setState({ number: this.state.number + 1 });
    }
  }
  render() {
    return html`
      Started from ${this.props.startFrom} <br />
      <button onclick=${() => this.updateNumber()}>
        Clicked ${this.state.number} times
      </button>
    `;
  }
}

window.customElements.define("x-exampleclass", ExampleClass);
