

class media {

    constructor({ id, photographerId, title, image, video, tags, likes, date, price }) {
        this.id = id
        this.authorId = photographerId
        this.title = title
        this.image = image
        this.video = video
        this.tags = tags
        this.likes = likes
        this.date = date
        this.price = price
    }


    render() {

        console.log(this.video)

        return `
            <div class="media">
                ${this.video === undefined ? `<img src="/medias/${this.image}" />` : `<video src="/medias/${this.video}"></video>`}
                <p>${this.title}, ${this.likes}</p>
            </div> 
        `
    }

}

export default media;