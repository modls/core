import lighterhtml from './lib/lighterhtml.js';
import { deepEqual as equal } from "fast-equals";



export default class Component extends HTMLElement {
    _mounted() {
        return !!this.__mounted;
    }
    get props() {
        return { ...this._props };
    }
    static get props() {
        return {};
    }

    static get observedAttributes() {
        var copy = Object.keys(this.props).map((name) => name.toLowerCase());
        return [...new Set([...Object.keys(this.props), ...copy])];
    }
    _genUUID() {
        const lut = []; for (var i = 0; i < 256; i++) { lut[i] = (i < 16 ? '0' : '') + (i).toString(16); }
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
        return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
            lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
            lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
            lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];

    }
    /**
     * 
     * @param {?Object} props 
     */
    constructor(props) {
        super();
        this.__ref = false;
        this.__mounted = false;
        this.state = {};
        this._props = {};
        this.identifier = this._genUUID();
        this._sheet = new CSSStyleSheet();
        this.__propsInitial = {};
        this._setProps({ ...this.constructor.props });
        if (props) {
            this._setProps({ ...props });
        }
        /**
         * @type ChildNode[]
         */
        this._renderMethod();

    }
    get contents() {
        if (!this._contents) {
            this._contentHolder = document.createElement('template');
            this._contentHolder.content.append(...this.childNodes);
            this._contents = [...this._contentHolder.content.childNodes];
        }
        return this._contents;
    }
    _renderMethod() {
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.adoptedStyleSheets = [this._sheet];
        this.render = render.bind(null, this._shadowRoot, this.render.bind(this));
    }
    _cssMethod() {
        this._sheet.replaceSync(this.styles());
    }
    _setProps(obj) {
        var oldProps = { ...this.props };
        for (var objName in obj) {
            let name = Object.keys(this.constructor.props).find(
                (_name) => _name.toLowerCase() === objName.toLowerCase(),
            );
            if (obj.hasOwnProperty(objName)) {
                if (!name) {
                    console.warn('Please define your property \'' + objName + '\' inside the \'static get props()\' of \'' + this.constructor.name + '\', otherwise your component will not be watching this property')
                    name = objName;
                }
                let value = obj[objName];

                this._props[name] = value;
            }
        }
        var newProps = { ...this.props };
        if (!equal(oldProps, newProps)) {
            this.forceUpdate();
            this.onDidUpdate(oldProps, { ...this.state });
        }
    }
    forceUpdate(force = false) {
        if (force === true || this._mounted()) {
            this.contents;
            this.render();
            this._sheet.replaceSync(this.styles());
        }
    }
    async setState(obj) {
        let _editState = obj;
        let oldState = { ...this.state };
        if (typeof obj === 'function') {
            _editState = await obj(this.state, this.props);
        }
        for (var name in _editState) {
            if (_editState.hasOwnProperty(name)) {
                this.state[name] = _editState[name];
            }
        }
        var newState = { ...this.state };
        if (!equal(oldState, newState)) {
            this.onDidUpdate({ ...this.props }, oldState);
            this.forceUpdate();
        }
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (typeof newValue === "string") {
            name = Object.keys(this.props).find(
                (_name) => _name.toLowerCase() === name.toLowerCase(),
            );

            try {
                newValue = JSON.parse(newValue);
            } catch (e) { }

        }
        this._setProps({ [name]: newValue });
    }
    connectedCallback() {
        if (!(this.getRootNode() instanceof DocumentFragment) || (this.getRootNode() instanceof ShadowRoot)) {
            this.__mounted = true;
            this.forceUpdate();
            this.onDidMount();
        }
    }
    disconnectedCallback() {
        if (!(this.getRootNode() instanceof DocumentFragment) || (this.getRootNode() instanceof ShadowRoot)) {
            this.onWillUnmount();
            this.__mounted = false;
        }
    }

    onDidMount() { }
    onWillUnmount() { }
    onDidUpdate(oldProps, oldState) { }
    styles() {
        return '';
    }
    render() {
        return html`< div>
    </div>`;
    }
}
const { html, render } = lighterhtml(Component);