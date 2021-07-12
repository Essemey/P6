export default class Tag {

    constructor(tag) {
        this.tag = tag;
        this.tagDOM = document.getElementById(tag.toLowerCase())
    }



    render() {
        return `<a href="#"  id=${this.tag.toLowerCase()} class="tag">#${this.tag}</a>`
    }

}