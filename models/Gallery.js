//import Media from "./Media.js"
import MediaFactory from "./MediaFactory.js"

class Gallery {

    constructor(author) {
        this.medias = []
        this.author = author
    }

    hydrate(medias) {

        const ownMedia = new MediaFactory()
        medias.forEach(media => {
            if (media.photographerId === this.author.id) {
                this.medias.push(ownMedia.build(media))
            }
        })

    }


    display() {

        let html = ''

        this.medias.forEach(media => {
            html += media.render()
        })

        document.querySelector('main').insertAdjacentHTML('beforeend',
            `<section id="gallery">
            <button id="popular">Trier par popularité</button>
            <div id="medias">
            ${html}
            </div>
        </section>`)
    }

    handleSort() {

        document.getElementById('popular').addEventListener('click', () => {
            console.log(this.medias)
            this.remove()
            this.medias.sort((a, b) => b.likes - a.likes)
            this.display()
            console.log('click')

        })

    }

    remove() {

        document.querySelector('main').removeChild(document.getElementById('gallery'))
    }




}


export default Gallery;