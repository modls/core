export default function WrapComponent(componentClass, props = {}, hook = null) {
    let component = 'prototype' in componentClass && 'constructor' in componentClass.prototype ? new componentClass() : componentClass;
    if (props) {
        component._setProps(props);
    }
    if (typeof hook === 'function') {
        hook(component);
    }
    return component;
}