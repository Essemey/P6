//import Media from "./Media.js"
import MediaFactory from "./MediaFactory.js"
import Slider from "./Slider.js"

class Gallery {

    constructor(author) {
        this.medias = []
        this.author = author
        this.factory = new MediaFactory()
    }

    hydrate(medias) {

        medias.forEach(media => {
            if (media.photographerId === this.author.id) {
                this.medias.push(this.factory.build(media))
            }
        })

    }


    display() {

        let html = ''

        this.medias.forEach(media => {
            html += media.render()
        })

        document.querySelector('main').innerHTML = `
        <section id="infos">
        </section>
        <section id="gallery">
            <button id="popular">Trier par popularité</button>
            <div id="medias">
            ${html}
            </div>
        </section>
        <div class="slider">
        </div>
        `

    }

    handleClickMedia() {

        [...document.querySelectorAll('.media')].forEach(media => {
            media.addEventListener('click', (e) => {
                new Slider(e.target, this.medias).display()
            })
        })
    }

    handleSort() {

        document.getElementById('popular').addEventListener('click', () => {
            this.medias.sort((a, b) => b.likes - a.likes)
            this.display()
        })

    }






}


export default Gallery;