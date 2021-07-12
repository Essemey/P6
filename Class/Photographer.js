import Tag from "./Tag.js";

export default class Photographer {

    constructor({ name, id, city, country, tags, tagline, price, portrait }) {
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags || []
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }

    render() {

        return (
            `<article class="photograph">
            <a href="#" class="authorHeader">
                    <img src="Images/${this.portrait}" alt="Photographe">
                    <h2>${this.name}</h2>
                </a>
                <p class="authorInfos">
                    <span class="city">${this.city}, ${this.country}</span>
                    <span class="description">${this.tagline}</span>
                    <span class="price">${this.price}€/jour</span>
                 </p>
                <div class="authorTags">
                    ${this.tags.map(tag => new Tag(tag).render()).join('')} 
                </div>
            </article>`); //join Echappe les virgules du tableau en le convertisant en chaine de caractères
    }
}