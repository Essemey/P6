import Tag from "./Tag.js"

export default class TagsList {

    constructor(tags) {
        this.tags = tags || ['Portrait', 'Art', 'Fashion', 'Architecture', 'Travel', 'Sport', 'Animals', 'Events']
        this.html = this.tags.map(tag => new Tag(tag).render()).join('')
    }

    add(tag) {
        this.tags.push(tag)
    }


    display(parent) {
        parent.insertAdjacentHTML('beforeend', this.html)
    }
}

