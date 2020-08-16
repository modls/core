/**
 * 
 * @param {string} str 
 */
const toKebabCase = (str) => {
    if (str) {
        let match = str
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
            );
        if (match) {
            return match.map((x) => x.toLowerCase())
                .join('-')
        }
    }
    throw new Error('Invalid string');
}
/**
 * 
 * @param { CustomElementConstructor } Component 
 */
const registerComponent = (Component) =>
    /**
     * 
     * @param { CustomElementConstructor } component 
     * @param { string? } tagName 
     */
    (component, tagName = null) => {
        if (Component.isPrototypeOf(component) || Component === component) {

            if (tagName === null) {
                tagName = "modls-" + toKebabCase(component.name);
            }

            if (!tagName.includes("-")) {
                tagName = "modls-" + tagName;
            }
            window.customElements.define(tagName.toLowerCase(), component);
        }
        return component;
    };

export default registerComponent;