import Photographer from "./models/Photographer.js"
import Gallery from "./models/Gallery.js"
import ListBox from "./models/ListBox.js";


fetch('/data.json')
    .then(res => res.json())
    .then(({ photographers, media }) => {

        let author;
        let gallery;

        if (checkPhotographer()) {
            gallery.hydrate(media)
            gallery.display()
            gallery.displayScore()
            author.display()
            author.listenContact()
            gallery.listenSlider()
            gallery.listenLike()
            ListBox.handleOpening()
            gallery.handleSort()
        } else {
            window.location.replace('/')
        }


        function checkPhotographer() {
            const photographer = photographers.find(photographer => window.location.search.substring(1) === photographer.id.toString(10))
            if (photographer) {
                author = new Photographer(photographer)
                gallery = new Gallery(author)
                return true;
            } else {
                return false;
            }
        }
    })
    .catch(err => console.error(err))


