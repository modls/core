//import BaseWebComponent, { html } from "../dist/index.js";
import {
  RawComponent,
  html,
  safeFetch,
  registerComponent,
  css
} from "../dist/esm.js";

class ExampleClass extends RawComponent {
  static get props() {
    return { startFrom: 0 };
  }
  constructor() {
    super(...arguments);
    this.state = {
      number: 0
    }
  }
  styles() {
    return css`
    button {
      color: red;
    }
    `
  }
  onDidMount() {
    console.log("Mounted");
    this.setState({ number: this.props.startFrom });
  }
  onAttributeChanged(oldProps, newProps) {
    console.log(oldProps, newProps);
  }
  onWillUnmount() {
    console.log("Unmounted");
  }
  updateNumber(i) {
    if (this.state.number === 10) {
      this.remove();
    } else {
      this.setState({ number: this.state.number + 1 });
    }
  }
  render() {
    return html`
      Started from ${this.props.startFrom} <br />
      <button onclick=${() => this.updateNumber(5)}>
        Clicked ${this.state.number} times
      </button>
    `;
  }
}

export default registerComponent(ExampleClass); //modls-example-class
