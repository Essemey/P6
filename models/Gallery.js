
import ListBox from "./ListBox.js"
import MediaFactory from "./MediaFactory.js"
import Slider from "./Slider.js"

class Gallery {

    constructor(author) {
        this.medias = []
        this.author = author
        this.factory = new MediaFactory()
        this.slider = new Slider(this.medias)
        this.listBox = new ListBox()
    }

    display() {

        let html = ''

        this.medias.forEach(media => {
            html += media.render()
        })

        document.querySelector('#gallery').innerHTML = `
            ${this.listBox.render()}
            <div id="medias">
            ${html}
            </div>
        `
    }

    displayScore() {

        const score = this.setScore()
        document.querySelector('.score').innerHTML =
            `<p>${score}<span class="like material-icons favorite" data-id=${this.id}>&#xE87D</span></p>
            <p>${this.author.price}€/jour</p>`
    }

    handleSort() {

        const popular = document.getElementById('popular')
        const date = document.getElementById('date')
        const title = document.getElementById('title')

        popular.addEventListener('click', () => {
            this.medias.sort((a, b) => b.likes - a.likes)
            this.refresh('popular')
        })

        date.addEventListener('click', () => {
            this.medias.sort((a, b) => new Date(b.date) - new Date(a.date))
            this.refresh('date')
        })

        title.addEventListener('click', () => {
            this.medias.sort((a, b) => (a.title > b.title) ? 1 : -1)
            this.refresh('title')
        })

    }

    hydrate(medias) {

        medias.forEach(media => {
            if (media.photographerId === this.author.id) {
                this.medias.push(this.factory.build(media))
            }
        })

    }

    listenLike() {

        document.querySelectorAll('.like').forEach(button => {

            button.addEventListener('click', () => {

                const media = this.medias.find(media => media.id == button.dataset.id)

                media.toggle()
                this.displayScore()

            })

        })

    }


    listenSlider() {

        document.querySelectorAll('.media a').forEach(media => {
            media.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(e.target)
                this.slider.setCurrent(e.target)
                this.slider.prepareVideo()
                this.slider.display()
                this.slider.handleClose()
                this.slider.handleArrows()
            })

        })
    }

    refresh(currentId) {
        this.display()
        this.listenSlider()
        this.listenLike()
        ListBox.handleOpening()
        ListBox.switch(currentId)
        this.handleSort()
    }

    setScore() {

        let score = 0;

        for (let i = 0; i < this.medias.length; i++) {
            score += this.medias[i].likes
        }

        return score;
    }



}


export default Gallery;