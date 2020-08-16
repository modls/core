import { custom } from "lighterhtml";

/**
 * 
 * @param {any} Component 
 */
export default function lighterhtml(Component) {
    const { svg, html, render } = custom({
        attribute(callback) {
            return (node, name, original) => {
                if (node instanceof Component && name !== "ref") {
                    return (value) => {
                        node._setProps({ [name]: value });
                    };
                }
                if (node instanceof Component && name === "ref") {
                    return (value) => {
                        callback.apply(this, [node, name, original])(value);
                        node.__ref = true;
                        if (node != value.current) {
                            node.forceUpdate();
                        }
                    };
                }
                if (node) {
                    return callback.apply(this, [node, name, original]);
                }
                return () => { }
            };
        },
    });
    return { svg, html, render };
}