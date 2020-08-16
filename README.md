![Node.js Package](https://github.com/modls/core/workflows/Node.js%20Package/badge.svg)

# Modls (pronounched as Modules)

## How To Use Modls

Install the module via `npm i @modls/core` and consume it as such:

```js
import { Component, html } from "@modls/core";
```

Alternatively you can use a CDN such as unpkg:

```js
import { html, Component } from "https://unpkg.com/@modls/core";
```

## Example

```js
import { html, Component, registerComponent } from "@modls/core";

export default class ExampleClass extends Component {
  static get props() {
    return { startFrom: 0 };
  }
  onMount() {
    console.log("Mount");
    this.setState({ number: this.props.startFrom });
  }
  onDidUpdate(oldProps, oldState) {
    console.log(oldProps, oldState);
  }
  onDidMount() {
    console.log("Mounted");
  }
  onWillUnmount() {
    console.log("Unmount");
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

registerComponent(ExampleClass);
```

### Thanks to

Rendering methods of [lighterhtml](https://www.npmjs.com/package/lighterhtml)
