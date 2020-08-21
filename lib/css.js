export default function css(parts, ...args) {
    let output = '';
    for (let i = 0; i < parts.length; i++) {
        output += parts[i];
        if (args[i]) {
            if (typeof args[i] === 'function') {
                output += args[i]();
            } else {
                output += args[i];
            }
        }
    }
    return output;
}