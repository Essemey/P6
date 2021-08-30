

class Media {

    constructor({ id, photographerId, title, image, tags, likes, date, price }) {
        this.id = id
        this.authorId = photographerId
        this.title = title
        this.tags = tags
        this.likes = likes
        this.date = date
        this.price = price
    }


}

export default Media;