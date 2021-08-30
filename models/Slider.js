

export default class Slider {

    constructor(medias) {
        this.current
        this.all = medias
        this.slider = document.querySelector('.slider')
    }


    display() {
        this.slider.innerHTML = `
        <div class="image_container">
            <span class="arrow material-icons arrow_back_ios" id="back">&#xE5E0</span>
            <div class="slider_image">${this.current}</div>
            <span class="arrow material-icons arrow_forward_ios" id="next">&#xE5E1</span>
            <span class="material-icons close" id="close">&#xE5CD</span>
        </div>


        `
        this.slider.className = 'slider visible'
        console.log(this.all)
    }

    setCurrent(current) {
        this.current = current.outerHTML
    }

    switchImage() {
        const slider_image = document.querySelector('.slider_image')
        slider_image.innerHTML = this.current
    }

    handleClose() {
        document.getElementById('close').addEventListener('click', () => {
            this.slider.className = 'slider'
        })
    }

    handleArrows() {

        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.addEventListener('click', () => {
                let next;
                let stop = false;
                if (arrow.id === 'next') {
                    this.all.forEach((media, index) => {
                        if (media.dom === this.current) {
                            if (index === this.all.length - 1) {
                                stop = true;
                            } else {
                                next = this.all[index + 1].dom
                            }
                        }
                    })
                } else if (arrow.id === 'back') {
                    this.all.forEach((media, index) => {
                        if (media.dom === this.current) {
                            if (index === 0) {
                                stop = true;
                            } else {
                                next = this.all[index - 1].dom
                            }
                        }
                    })
                }
                if (!stop) {
                    this.current = next
                    this.switchImage()
                }
            })
        })
    }

}