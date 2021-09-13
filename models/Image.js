import Media from './Media.js'

export default class Image extends Media {

    constructor(item) {

        super(item)
        this.image = item.image
        this.dom = `<img src="/medias/${this.image}" alt="${this.title}" data-id=${this.id}>`

    }



    render() {


        return `
            <div class="media">
                <a href="" aria-haspopup="true" data-id=${this.id}>${this.dom}</a>
                <div class="media-infos">
                    <h2>${this.title}</h2>
                    ${!this.liked
                ?
                `<p>
                    <span class="count-likes" data-id=${this.id}>${this.likes}</span>
                    <button aria-label="like" class="like material-icons" data-id=${this.id}>favorite_border</button>
                </p>`
                :
                `<p>
                    <span class="count-likes" data-id=${this.id}>${this.likes}</span>
                    <button aria-label="like" class="like material-icons" data-id=${this.id}>favorite</button>
                </p>`}
                </div>
            </div> 
        `
    }
}