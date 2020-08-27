const cssLoader =  (style) =>{
    let link = document.createElement('style')
    link.innerHTML = style
    document.head.appendChild(link)
}
const loadCssFile = (url) =>{
    const link = document.createElement('link')
    const attributes = {
        rel:'stylesheet',
        type:'text/css',
        href:url,
    }
    for (const key in attributes) {
        link.setAttribute(key, attributes[key])
    }
    document.head.appendChild(link)
}
export { loadCssFile }
export default cssLoader