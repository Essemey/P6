

export default class Slider {

    constructor(medias) {
        this.currentHTML
        this.currentId
        this.all = medias
        this.slider = document.querySelector('.slider')
    }

    display() {
        this.slider.innerHTML = `
        <div class="media_container">
            <span class="arrow material-icons arrow_back_ios" id="back">&#xE5E0</span>
            <div class="slider_media">${this.currentHTML}</div>
            <span class="arrow material-icons arrow_forward_ios" id="next">&#xE5E1</span>
            <span class="material-icons close" id="close">&#xE5CD</span>
        </div>


        `
        this.slider.className = 'slider visible'
    }

    handleArrows() {

        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.addEventListener('click', () => {
                let next;
                let nextId;
                if (arrow.id === 'next') {
                    this.all.forEach((media, index) => {
                        if (media.id === this.currentId) {
                            if (index === this.all.length - 1) {
                                next = this.all[0].dom             //On définit le code HTML et l'id du prochain média
                                nextId = this.all[0].id
                            } else {
                                next = this.all[index + 1].dom
                                nextId = this.all[index + 1].id
                            }
                        }
                    })
                } else if (arrow.id === 'back') {
                    this.all.forEach((media, index) => {
                        if (media.id === this.currentId) {
                            if (index === 0) {
                                next = this.all[this.all.length - 1].dom
                                nextId = this.all[this.all.length - 1].id
                            } else {
                                next = this.all[index - 1].dom
                                nextId = this.all[index - 1].id
                            }
                        }
                    })
                }


                this.currentId = nextId
                this.currentHTML = next
                this.switchMedia()

            })
        })
    }

    handleClose() {
        document.getElementById('close').addEventListener('click', () => {
            this.slider.className = 'slider'
        })
    }

    prepareVideo(current) {

        if (current.tagName === 'VIDEO') {
            current.setAttribute('autoplay', "")
            current.setAttribute('loop', "")
        }

        this.all.map(media => media.hasOwnProperty('video')
            ? media.dom = `<video autoplay loop src="/medias/${media.video}"></video>`
            : media
        )
    }

    setCurrent(current) {

        this.currentId = parseInt(current.dataset.id, 10)
        this.currentHTML = current.outerHTML
    }

    switchMedia() {
        const slider_media = document.querySelector('.slider_media')
        slider_media.innerHTML = this.currentHTML
    }



}