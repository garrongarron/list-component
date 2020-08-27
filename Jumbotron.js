import getIcon from './Icons.js'
import { loadCssFile } from './CssLoader.js'

loadCssFile('Jumbotron.css')

let jumbotron = document.createElement('header')
let h1 = document.createElement('h1')
h1.innerText = `Css Template Machine (default text)`

let navegador = document.createElement('div')
let pageName = document.createElement('div')
pageName.innerText = 'Brand'
let hamburger = document.createElement('div')
hamburger.appendChild(getIcon('menu'))
let lens = document.createElement('div')
lens.appendChild(getIcon('search'))
navegador.appendChild(hamburger)
navegador.appendChild(pageName)
navegador.appendChild(lens)


let logo = document.createElement('div')
let user = document.createElement('div')
user.innerText = `Garron Norrag (default text)`
let footer = document.createElement('div')
footer.appendChild(logo)//vacio
footer.appendChild(user)
jumbotron.appendChild(navegador)
jumbotron.appendChild(h1)
jumbotron.appendChild(footer)

export let setHeader = (headText, userName, url) =>{
    h1.innerText = headText
    user.innerText = userName
    logo.style.backgroundImage = `url(${url})`
    return jumbotron
}

export default jumbotron
