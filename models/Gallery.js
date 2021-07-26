import Media from "./Media.js"

class Gallery {

    constructor(medias, id) {
        this.medias = medias || []
        this.authorId = id
        this.html = ''
    }

    hydrate(target) {
        this.html = ''
        if (target === undefined) {
            this.medias.forEach(media => {
                this.html += media.photographerId === this.authorId ? new Media(media).render() : ''
            })
        } else {
            target.forEach(media => {
                this.html += media.photographerId === this.authorId ? new Media(media).render() : ''
            })
        }
    }

    handleSort() {

        document.getElementById('popular').addEventListener('click', () => {

            this.remove()
            this.medias.sort((a, b) => b.likes - a.likes)
            this.hydrate()
            this.render()
            console.log('click')

        })

    }

    remove() {

        document.querySelector('main').removeChild(document.getElementById('gallery'))
    }

    render() {

        document.querySelector('main').insertAdjacentHTML('beforeend',
            `<section id="gallery">
            <button id="popular">Trier par popularité</button>
            <div id="medias">
            ${this.html}
            </div>
        </section>`)
    }


}


export default Gallery;