import Media from './Media.js'

export default class Video extends Media {

    constructor(item) {

        super(item)
        this.video = item.video
        this.dom = `<video aria-label="${this.title}" src="/medias/${this.video}" data-id=${this.id}></video>`


    }

    render() {

        return `
            <div class="media">
                <a href="" aria-haspopup="true" data-id=${this.id}><video aria-label="${this.title}" src="/medias/${this.video}" data-id=${this.id}></video></a>
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