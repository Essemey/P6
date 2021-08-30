import List from "./models/List.js";



fetch('/data.json')
    .then(res => res.json())
    .then(({ photographers }) => {
        const list = new List()
        list.hydrate(photographers)
        list.display()
        list.displayTags()
        list.handleClick()
        list.checkUrl()
    })
    .catch(err => console.error(err))








