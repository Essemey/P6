

export default class Slider {

    constructor(medias) {
        this.all = medias
        this.current
        this.slider = document.querySelector('.slider')
        this.header = document.querySelector('header')
        this.main = document.querySelector('main')
    }


    display() {
        this.slider.innerHTML = `
        <div class="media_container" role="dialog" aria-label="slider">
            <button aria-label="Previous image" class="arrow material-icons" id="back">arrow_back_ios</button>
            <div class="slider_media">${this.current.dom}<p>${this.current.title}</p></div>
            <button aria-label="Next image"  class="arrow material-icons" id="next">arrow_forward_ios</button>
            <button aria-label="Close dialog" class="material-icons" id="close">close</button>
        </div>


        `
        this.slider.className = 'slider visible'
        this.slider.ariaHidden = 'false'
        this.main.ariaHidden = 'true'
        this.header.ariaHidden = 'true'
        this.main.style.visibility = 'hidden'
        this.header.style.visibility = 'hidden'
    }

    handleArrows() {

        document.querySelector('.arrow').focus()

        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.addEventListener('click', () => {
                let next;
                //let nextId;
                if (arrow.id === 'next') {
                    this.all.forEach((media, index) => {
                        if (media === this.current) {
                            if (index === this.all.length - 1) {
                                next = this.all[0]            //On définit le prochain média
                            } else {
                                next = this.all[index + 1]
                            }
                        }
                    })
                } else if (arrow.id === 'back') {
                    this.all.forEach((media, index) => {
                        if (media === this.current) {
                            if (index === 0) {
                                next = this.all[this.all.length - 1]
                            } else {
                                next = this.all[index - 1]
                            }
                        }
                    })
                }


                this.current = next
                this.switchMedia()

            })
        })
    }

    handleClose() {
        document.getElementById('close').addEventListener('click', () => {
            this.slider.className = 'slider'
            this.slider.ariaHidden = "true"
            this.main.ariaHidden = 'false'
            this.header.ariaHidden = 'false'
            this.main.style.visibility = 'visible'
            this.header.style.visibility = 'visible'
        })
    }

    prepareVideo() {

        this.all.map(media => media.hasOwnProperty('video')
            ? media.dom = `<video autoplay loop src="/medias/${media.video}"></video>`
            : media
        )
    }

    setCurrent(current) {

        const currentId = parseInt(current.dataset.id, 10)

        this.current = this.all.find(media => media.id === currentId)

    }

    switchMedia() {
        const slider_media = document.querySelector('.slider_media')
        slider_media.innerHTML = `${this.current.dom}<p>${this.current.title}</p>`
    }



}