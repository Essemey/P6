import Photographer from "./models/Photographer.js"
import Gallery from "./models/Gallery.js"


fetch('/data.json')
    .then(res => res.json())
    .then(({ photographers, media }) => {
        let redirect = true;
        let author;
        let gallery;
        photographers.forEach(photographer => {
            if (window.location.search.substring(1) === photographer.id.toString(10)) {
                redirect = false;
                author = new Photographer(photographer)
                gallery = new Gallery(author)
            }
        })
        if (redirect) window.location.replace('/')
        gallery.hydrate(media)
        gallery.display()
        author.render()
        gallery.handleClickMedia()
        gallery.handleSort()
    })
    .catch(err => console.error(err))

console.log(window.location.search.substring(1))