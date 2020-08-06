//import BaseWebComponent, { html } from "../dist/index.js";
import {
  RawComponent,
  html,
  safeFetch,
  registerComponent,
} from "../dist/esm.js";

class ExampleClass extends RawComponent {
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
      <button onclick=${()=> this.updateNumber(5)}>
        Clicked ${this.state.number} times
      </button>
    `;
  }
}

export default registerComponent(ExampleClass); //modls-example-class
