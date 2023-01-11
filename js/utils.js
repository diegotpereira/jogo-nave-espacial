

export default createDomNode = (className, tag = 'div') => {

    const elemento = document.createElement(tag);

    if(className) {

        elemento.classList.add(...className.split(''));
    }

    return elemento;
}

export const addDomNode = (parent, {
    className, tag, text
}) => {

    const child = createDomNode(className, tag)

    if(text) {

        child.textContent = text;
    }
    parent.appendChild(child);

    return child;
}