//import BaseWebComponent, { html } from "../dist/index.js";
import {
  Component,
  html,
  safeFetch,
  registerComponent,
  css
} from "../dist/esm.js";

class ExampleClass extends Component {
  static get props() {
    return { startFrom: 0 };
  }
  constructor() {
    super(...arguments);
    this.state = {
      numbers: [0, 0]
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
    let numbers = [...this.state.numbers];
    numbers[0] = this.props.startFrom;
    this.setState({ numbers });
  }
  onDidUpdate(oldProps, oldState) {
    console.log(this.state, oldState);
  }
  onWillUnmount() {
    console.log("Unmounted");
  }
  updateNumber(i) {
    if (this.state.numbers[0] === 10) {
      this.remove();
    } else {

      let numbers = [...this.state.numbers];
      numbers[0] = this.state.numbers[0] + 1;
      this.setState({ numbers });
    }
  }
  render() {
    return html`
    Started from ${this.props.startFrom} <br />
    <button onclick=${() => this.updateNumber(5)}>
      Clicked ${this.state.numbers[0]} times
    </button>
    `;
  }
}

export default registerComponent(ExampleClass); //modls-example-class
