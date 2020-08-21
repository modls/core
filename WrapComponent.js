export default function WrapComponent(componentClass, props = {}, hook = null) {
    if (!componentClass.___hooks) {
        componentClass.___hooks = [];
    }
    if (!componentClass.___props) {
        componentClass.___props = {};
    }
    if (typeof hook === 'function') {
        componentClass.___hooks.push(hook);
    }
    componentClass.___props = { ...props };

    return componentClass;
}