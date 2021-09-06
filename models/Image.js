import Media from './Media.js'

export default class Image extends Media {

    constructor(item) {

        super(item)
        this.image = item.image
        this.dom = `<img src="/medias/${this.image}" data-id=${this.id}>`

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