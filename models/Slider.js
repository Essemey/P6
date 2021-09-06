

export default class Slider {

    constructor(medias) {
        this.all = medias
        this.current
        this.slider = document.querySelector('.slider')
    }

    display() {
        this.slider.innerHTML = `
        <div class="media_container">
            <span class="arrow material-icons arrow_back_ios" id="back">&#xE5E0</span>
            <div class="slider_media">${this.current.dom}<p>${this.current.title}</p></div>
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