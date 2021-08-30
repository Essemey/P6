
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



        document.querySelectorAll('.like').forEach(button => {

            const domMedia = button.parentNode.previousElementSibling.previousElementSibling.outerHTML

            //En cas de redisplay on vérifie les médias déja likés
            this.medias.forEach(media => {
                if (media.dom === domMedia && media.liked) {
                    button.className = 'like material-icons favorite'
                    button.innerHTML = '&#xE87D'
                } else {
                    return media;
                }
            })

            button.addEventListener('click', () => {

                this.medias.map(media => {
                    if (media.dom === domMedia && !media.liked) {

                        media.likes++
                        button.className = 'like material-icons favorite'
                        button.innerHTML = '&#xE87D'
                        media.liked = true
                        button.parentNode.childNodes[0].data = media.likes
                        this.displayScore()

                    } else if (media.dom === domMedia && media.liked) {
                        media.likes--
                        button.className = 'like material-icons favorite_border'
                        button.innerHTML = '&#xE87E'
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

    refresh(currentId) {
        this.display()
        this.listenSlider()
        this.listenLike()
        ListBox.handleOpening()
        ListBox.switch(currentId)
        this.handleSort()

    }


}


export default Gallery;