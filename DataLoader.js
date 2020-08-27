let elements = 'elements'

let dataPromise = new Promise((resolve, reject) => {
    let list = localStorage.getItem(elements)
    if (!list) {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(res => {
                let data = res.slice(0, 10).map(element => {return {title:element.title,url:element.url}})
                localStorage.setItem(elements, JSON.stringify(data))
                resolve(data)
            })
            .catch(e => reject(e))
    } else {
        resolve(JSON.parse(list))
    }
})
export default dataPromise
