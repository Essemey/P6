import Media from './Media.js'

export default class Video extends Media {

    constructor(item) {

        super(item)
        this.video = item.video
        this.dom = `<video autoplay="true" src="/medias/${this.video}"></video>`

    }

    render() {

        return `
            <div class="media">
                <video autoplay="true" src="/medias/${this.video}"></video>
                <h2>${this.title}</h2>
                <p>${this.likes}<button class="btn-like">Like</button></p>
            </div> 
        `
    }

}