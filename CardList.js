import Card from './Card.js'
import cssLoader from './CssLoader.js'

const cardList = document.createElement('div')

export let setData = (list) => {
    list.forEach(card => {
        let node = new Card()
        node.setTitle(card.title)
        node.setImg(card.url)
        cardList.append(node.getNode())
    })
    return cardList
}
cardList.classList.add('list-card')
cssLoader(`
.list-card{
    padding: var(--h-pad)
}
.list-card > div {
    display: grid;
    grid-template-columns: 7em auto;
    margin-bottom: var(--h-pad);
}
.list-card > div > div{
    margin-left: var(--h-pad);
    align-self: center;
    text-transform: capitalize;
}

.list-card a{
    color: var(--link-color);
    font-weight: bold;
    text-transform: uppercase;
}

.list-card img{
    background:red;
    width:7em;
    height:7em;
    object-fit: cover;
}`)
export default cardList