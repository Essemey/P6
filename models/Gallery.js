
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

        document.querySelector('#gallery').innerHTML = `
            ${this.listBox.render()}
            <div id="medias">
            ${html}
            </div>
        `
    }

    setScore() {

        let score = 0;

        for (let i = 0; i < this.medias.length; i++) {
            score += this.medias[i].likes
        }

        return score;
    }

    displayScore() {

        const score = this.setScore()
        document.querySelector('.score').innerHTML = `<p>${score}</p>`
    }

    listenSlider() {

        const slider = new Slider(this.medias)

        document.querySelectorAll('.media img, .media video').forEach(media => {
            media.addEventListener('click', (e) => {
                slider.setCurrent(e.target)
                slider.display()
                slider.handleClose()
                slider.handleArrows()
            })
        })
    }


    listenLike() {



        document.querySelectorAll('.btn-like').forEach(button => {

            const domMedia = button.parentNode.previousElementSibling.previousElementSibling.outerHTML

            //En cas de redisplay on vérifie les médias déja likés
            this.medias.forEach(media => media.dom === domMedia && media.liked ? button.className += ' liked' : media)

            button.addEventListener('click', () => {

                this.medias.map(media => {
                    if (media.dom === domMedia && !media.liked) {

                        media.likes++
                        button.className += ' liked'
                        media.liked = true
                        button.parentNode.childNodes[0].data = media.likes
                        this.displayScore()

                    } else if (media.dom === domMedia && media.liked) {
                        media.likes--
                        button.className = 'btn-like'
                        media.liked = false
                        button.parentNode.childNodes[0].data = media.likes
                        this.displayScore()

                    } else {
                        return media
                    }
                })


            })
        })
    }

    handleSort() {

        document.getElementById('popular').addEventListener('click', () => {
            this.medias.sort((a, b) => b.likes - a.likes)
            this.display()
            this.listenSlider()
            this.listenLike()
            this.handleSort()
        })

        document.getElementById('date').addEventListener('click', () => {
            this.medias.sort((a, b) => new Date(b.date) - new Date(a.date))
            this.display()
            this.listenSlider()
            this.listenLike()
            ListBox.handleOpening()
            this.handleSort()
        })

        document.getElementById('title').addEventListener('click', () => {
            this.medias.sort((a, b) => (a.title > b.title) ? 1 : -1)
            console.log(this.medias)
            this.display()
            this.listenSlider()
            this.listenLike()
            ListBox.handleOpening()
            this.handleSort()
        })

    }


}


export default Gallery;