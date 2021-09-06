import Media from './Media.js'

export default class Video extends Media {

    constructor(item) {

        super(item)
        this.video = item.video
        this.dom = `<video src="/medias/${this.video}" data-id=${this.id}></video>`


    }

    render() {

        return `
            <div class="media">
                ${this.dom}
                <div class="media-infos">
                    <h2>${this.title}</h2>
                    ${!this.liked
                ?
                `<p>${this.likes}<span class="like material-icons favorite_border" data-id=${this.id}>&#xE87E</span></p>`
                :
                `<p>${this.likes}<span class="like material-icons favorite" data-id=${this.id}>&#xE87D</span></p>`}
                </div>
            </div> 
        `
    }

}