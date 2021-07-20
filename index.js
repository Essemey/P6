import List from "./models/List.js";



fetch('/data.json')
    .then(res => res.json())
    .then(({ photographers }) => {
        const photographerList = new List(photographers)
        photographerList.hydrate()
        photographerList.display()
        photographerList.displayTags()
        photographerList.handleClick()
    })
    .catch(err => console.error(err))








