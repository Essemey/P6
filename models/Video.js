export default class Video {

    constructor({ id, photographerId, title, video, tags, likes, date, price }) {
        this.id = id
        this.authorId = photographerId
        this.title = title
        this.video = video
        this.tags = tags
        this.likes = likes
        this.date = date
        this.price = price
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