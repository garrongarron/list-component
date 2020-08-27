import { setHeader } from './Jumbotron.js'
import { setData } from './CardList.js'
import dataPromise from './DataLoader.js'

let page = document.createElement('div')

dataPromise.then(list => {
    page.appendChild(setData(list))
}).catch(e => console.error(e))

let urlImagenUser = 'https://randomuser.me/api/portraits/men/1.jpg'
page.appendChild(setHeader('Css Template Machine', 'Garron Norrag', urlImagenUser))

document.body.appendChild(page)