import Photographer from "./Class/Photographer.js";
import PhotographersList from "./Class/PhotographersList.js";
import TagsList from "./Class/TagsList.js"

const photographersDOM = document.getElementById('photographers')
const tagsDOM = document.querySelector('nav')
const tagsList = new TagsList()
const photographerList = new PhotographersList()

tagsList.display(tagsDOM)

fetch('/data.json')
    .then(res => res.json())
    .then(({ photographers }) => {
        photographers.forEach(photographer => {
            const artist = new Photographer(photographer)
            photographerList.add(photographer, artist.render())
        })
    })
    .then(() => {
        photographerList.display(photographersDOM)
        console.log(tagsList)
    })
    .catch(err => console.error(err))








