

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
        this.html = this.renderIndex()
    }


    hidden() {
        const element = document.getElementById(this.id)
        if (element.classList.length === 1) {
            document.getElementById(this.id).className += ' hidden'
        }

    }

    visible() {
        const element = document.getElementById(this.id)
        if (element.classList.length === 2) {
            document.getElementById(this.id).classList.remove('hidden')
        }

    }

    render() {

        document.getElementById('infos').insertAdjacentHTML('beforeend', `
        <div class="description">
            <h1>${this.name}</h1>
            <p class="authorInfos"> <span class="city">${this.city}, ${this.country}</span>
                <span class="tagline">${this.tagline}</span>
            </p>
            <div class="authorTags">
                ${this.tags.map(tag => `<a href="/index.html#${tag}" class="tag ${tag}">#${tag}</a>`).join('')}
            </div>
        </div>
        <button>Contactez-moi</button>
        <img src="images/${this.portrait}" alt="Photographe">
        `)
    }

    renderIndex() {

        return (
            `<article class="photograph" id="${this.id}">
            <a href="/photographer.html?${this.id}" class="authorHeader">
                    <img src="images/${this.portrait}" alt="Photographe">
                    <h2>${this.name}</h2>
                </a>
                <p class="authorInfos">
                    <span class="city">${this.city}, ${this.country}</span>
                    <span class="description">${this.tagline}</span>
                    <span class="price">${this.price}€/jour</span>
                 </p>
                <div class="authorTags">
                    ${this.tags.map(tag => `<a href="#${tag}" class="tag ${tag}">#${tag}</a>`).join('')}
                </div>
            </article>`); //join Echappe les virgules du tableau en le convertisant en chaine de caractères
    }
}