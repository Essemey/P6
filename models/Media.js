

class Media {

    constructor({ id, photographerId, title, image, tags, likes, date, price }) {
        this.id = id
        this.authorId = photographerId
        this.title = title
        this.tags = tags
        this.likes = likes
        this.date = date
        this.price = price
        this.liked = false
    }

    toggle() {

        const button = document.querySelector(`.like[data-id="${this.id}"]`)
        const countLikes = document.querySelector(`.count-likes[data-id="${this.id}"]`)

        this.liked = !this.liked  //On change la valeur de liked
        if (this.liked) {
            this.likes++
            button.innerHTML = 'favorite'
            button.ariaLabel = 'like'
        } else {
            this.likes--
            button.innerHTML = 'favorite_border'
            button.ariaLabel = 'dislike'
        }

        countLikes.innerHTML = this.likes
    }


}

export default Media;