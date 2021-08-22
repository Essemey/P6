import Media from './Media.js'

export default class Image extends Media {

    constructor(item) {

        super(item)
        this.image = item.image
        this.dom = `<img src="/medias/${this.image}">`

    }



    render() {

        console.log('likes: ', this.likes)

        return `
            <div class="media">
                <img src="/medias/${this.image}" />
                <h2>${this.title}</h2>
                <p>${this.likes}<button class="btn-like">Like</button></p>
            </div> 
        `
    }
}