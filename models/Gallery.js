
import ListBox from "./ListBox.js"
import MediaFactory from "./MediaFactory.js"
import Slider from "./Slider.js"

class Gallery {

    constructor(author) {
        this.medias = []
        this.author = author
        this.factory = new MediaFactory()
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

                this.medias.forEach(media => {
                    if (media.id == button.dataset.id) { //On récupère le bon media
                        media.liked = !media.liked  //On change la valeur de liked
                        handleLike(media) //On incrémente ou désincrémente selon le staut de liked
                        button.parentNode.childNodes[0].data = media.likes //On affiche le nouveau nombre de likes
                        this.displayScore()
                    }
                })

            })

            function handleLike(media) {
                if (media.liked) {
                    media.likes++
                    button.innerHTML = '&#xE87D'
                    button.classList.replace('favorite_border', 'favorite')
                } else {
                    media.likes--
                    button.innerHTML = '&#xE87E'
                    button.classList.replace('favorite', 'favorite_border')
                }
            }

        })

    }


    listenSlider() {

        const slider = new Slider(this.medias)

        document.querySelectorAll('.media img, .media video').forEach(media => {
            media.addEventListener('click', (e) => {
                slider.setCurrent(e.target)
                slider.prepareVideo()
                slider.display()
                slider.handleClose()
                slider.handleArrows()
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