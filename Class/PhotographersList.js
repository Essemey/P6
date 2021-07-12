export default class PhotographersList {

    constructor() {
        this.photographers = []
        this.html = ''
    }

    add(photographer, html) {
        this.photographers.push(photographer)
        this.addHTML(html)
    }

    addHTML(html) {
        this.html += html
    }

    display(parent) {
        parent.insertAdjacentHTML('afterbegin', this.html)
    }
}