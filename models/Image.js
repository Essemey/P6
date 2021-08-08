import Media from './Media.js'

export default class Image extends Media {

    constructor(item) {

        super(item)
        this.image = item.image

    }

    render() {

        console.log(this.image)
        return `
            <div class="media">
                <img src="/medias/${this.image}" />
                <p>${this.title}, ${this.likes}</p>
            </div> 
        `
    }
}