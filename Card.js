export default class Card{
    constructor(){
        this.title = document.createElement('h2')
        this.img = document.createElement('img')
        this.a = document.createElement('a')
        let container = document.createElement('div')
        this.node = document.createElement('div')
        this.node.appendChild(this.img)
        this.node.appendChild(container)
        container.appendChild(this.title)
        container.appendChild(this.a)
    }
    getNode(){
        return this.node
    }
    setTitle(title){
        this.title.innerText = title
    }
    setImg(url){
        this.img.src = url
        this.a.href = url
        this.a.innerText = `More...`
    }
}