

export default class Slider {

    constructor(current, medias) {
        this.current = current
        this.all = medias
    }


    display() {

        console.log(this.current)
        document.querySelector('.slider').outerHTML = `${this.current}`
    }

}