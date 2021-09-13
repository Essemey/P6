import Photographer from "./models/Photographer.js"
import Gallery from "./models/Gallery.js"
import ListBox from "./models/ListBox.js";


fetch('/data.json')
    .then(res => res.json())
    .then(({ photographers, media }) => {

        const author = photographers.find(photographer => window.location.search.substring(1) === photographer.id.toString(10))

        if (!author) {
            return window.location.replace('/')
        }

        const photographer = new Photographer(author)
        const gallery = new Gallery(photographer)

        gallery.hydrate(media)
        gallery.display()
        gallery.displayScore()
        photographer.display()
        photographer.displayContact()
        photographer.listenContact()
        gallery.listenSlider()
        gallery.listenLike()
        ListBox.handleOpening()
        gallery.handleSort()


    })
    .catch(err => console.error(err))


