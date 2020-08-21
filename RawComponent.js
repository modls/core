import lighterhtml from './lib/lighterhtml.js';
import Component from "./Component.js";

export default class RawComponent extends Component {
    _renderMethod() {
        this.render = render.bind(null, this, this.render.bind(this));
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, this._sheet];
        this.style.display = "contents";
    }
}

const { html, render } = lighterhtml(Component);