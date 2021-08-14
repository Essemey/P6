import Media from './Media.js'

export default class Video extends Media {

    constructor(item) {

        super(item)
        this.video = item.video

    }

    render() {

        return `
            <div class="media">
                <video autoplay="true" src="/medias/${this.video}"></video>
                <p>${this.title}, ${this.likes}</p>
            </div> 
        `
    }

}