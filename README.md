![Node.js Package](https://github.com/DominicVonk/BaseWebComponent/workflows/Node.js%20Package/badge.svg)

# Base WebComponent

## How To Use BaseWebComponent

Install the module via `npm i base-webcomponent` and consume it as such:

```js
import BaseWebComponent, { html } from "base-webcomponent";
```

Alternatively you can use a CDN such as unpkg:

```js
import BaseWebComponent, { html } from "https://unpkg.com/base-webcomponent";
```

## Example

```js
import BaseWebComponent, { html } from "base-webcomponent";

export default class ExampleClass extends BaseWebComponent {
  static get props() {
    return { startFrom: 0 };
  }
  state = {
    number: 0,
  };
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
```

### Thanks to

Rendering methods of [µhtml](https://www.npmjs.com/package/uhtml)
