

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

    display() {
        document.getElementById('infos').insertAdjacentHTML('beforeend', this.render())
    }

    hide() {
        const element = document.getElementById(this.id)
        if (element.classList.length === 1) {
            document.getElementById(this.id).className += ' hidden'
        }

    }

    listenContact() {
        const btnContact = document.getElementById('contact')
        const bgModal = document.querySelector('.bg_modal')
        const formContact = document.querySelector('.contact_modal form')
        const closeContact = document.querySelector('.contact_modal #closeContact')

        btnContact.addEventListener('click', () => {
            bgModal.classList.replace('closed', 'open')

            formContact.addEventListener('submit', (e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const form = Object.fromEntries(formData)
                console.log(form)
            })

            closeContact.addEventListener('click', () => {
                bgModal.classList.replace('open', 'closed')
            })

        })
    }

    render() {

        return (
            `<div class="description">
                <h1>${this.name}</h1>
                <p class="authorInfos"> <span class="city">${this.city}, ${this.country}</span>
                    <span class="tagline">${this.tagline}</span>
                </p>
                <div class="authorTags">
                    ${this.tags.map(tag => `<a href="/index.html#${tag}" class="tag ${tag}">#${tag}</a>`).join('')}
                </div>
            </div>
        <button id="contact">Contactez-moi</button>
        <div class="bg_modal closed">
            <div class="contact_modal">
                <header>
                <h1>Contactez-moi<br>${this.name}</h1>
                <button class="material-icons close" id="closeContact">&#xE5CD</button>
                </header>
                <form>
                    <label for="firstname">Prénom</label>
                    <input type="text" name="firstname" id="firstname" />
                    <label for="name">Nom</label>
                    <input type="text" name="name" id="name" />
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label for="message">Votre message</label>
                    <textarea name="message" id="message"></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
        <img src="images/${this.portrait}" alt="Photographe">`)
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

    show() {
        const element = document.getElementById(this.id)
        if (element.classList.length === 2) {
            document.getElementById(this.id).classList.remove('hidden')
        }

    }


}