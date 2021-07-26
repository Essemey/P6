import Photographer from "./models/Photographer.js"
import Gallery from "./models/Gallery.js"




fetch('/data.json')
    .then(res => res.json())
    .then(({ photographers, media }) => {
        let redirect = true;
        let gallery;
        photographers.forEach(photographer => {
            if (window.location.search.substring(1) === photographer.id.toString(10)) {
                redirect = false;
                new Photographer(photographer).render()
                gallery = new Gallery(media, photographer.id)
            }
        })
        if (redirect) window.location.replace('/')
        gallery.hydrate()
        gallery.render()
        gallery.handleSort()
        console.log(gallery.medias)
    })
    .catch(err => console.error(err))

console.log(window.location.search.substring(1))