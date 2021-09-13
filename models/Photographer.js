

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

    displayContact() {

        document.querySelector('body').insertAdjacentHTML('afterbegin',
            `<div class="bg_modal closed" aria-hidden="true">
                <div class="contact_modal" role="dialog" aria-describedby="Contact form">
                    <header>
                    <h1>Contactez-moi<br>${this.name}</h1>
                    <button class="material-icons" id="closeContact">close</button>
                    </header>
                    <form>
                        <label id="firstname-label" for="firstname">Prénom</label>
                        <input type="text" name="firstname" aria-labelledby="firstname-label" id="firstname" />
                        <label id="name-label" for="name">Nom</label>
                        <input type="text" name="name" aria-labelledby="name-label" id="name" />
                        <label id="email-label" for="email">Email</label>
                        <input type="email" name="email" aria-labelledby="email-label" id="email" />
                        <label id="message-label" for="message">Votre message</label>
                        <textarea name="message" aria-labelledby="message-label" id="message"></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>`)
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
        const main = document.querySelector('main')
        const header = document.querySelectorAll('header')[1]

        btnContact.addEventListener('click', () => {
            bgModal.classList.replace('closed', 'open')

            main.ariaHidden = "true"
            header.ariaHidden = "true"

            closeContact.focus()

            formContact.addEventListener('submit', (e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const form = Object.fromEntries(formData)
                console.log(form)
                bgModal.classList.replace('open', 'closed')
            })

            closeContact.addEventListener('click', () => {
                bgModal.classList.replace('open', 'closed')
                main.ariaHidden = "false"
                header.ariaHidden = "false"
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
        <button id="contact" aria-haspopup="true">Contactez-moi</button>
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