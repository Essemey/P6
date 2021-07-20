import Photographer from "./Photographer.js"

export default class List {

    constructor(photographers) {
        this.all = photographers
        this.html = ''
        this.filters = []
        this.filteredList = []
    }


    visibility() {
        this.all.forEach(photographer => {
            if (this.filteredList.length !== 0 && this.filters.length !== 0) {
                if (!this.filteredList.includes(photographer)) { //Si le photographe n'est pas présent dans la liste filtrée on le cache
                    new Photographer(photographer).hidden()
                } else {
                    new Photographer(photographer).visible()
                }
            } else { //Si la liste filtrée et les filtres sont vides, on masque pas les photographes
                new Photographer(photographer).visible()
            }
        })
    }

    addFilter(item) {

        this.filters.push(item) //On ajoute le filtre

        if (this.filters.length === 1) { //Si il n'y a que 1 filtre
            this.filteredList = this.all.filter(photographer => photographer.tags.includes(item))
        } else {                                        //Si il y a plusieurs filtres
            this.all.forEach(photographer => {
                photographer.tags.forEach(tag => {    //On parcourt les tags de chaque photographe
                    if (this.filters.includes(tag)) {   //Si au moins un des tags correspond au filtre alors on ajoute le photographe 
                        if (!this.filteredList.includes(photographer)) { //si il n'est pas déja présent dans le tableau
                            this.filteredList.push(photographer)
                        }
                    }
                })
            })
        }

        this.visibility()

    }

    deleteFilter(item) {
        this.filters = this.filters.filter(tag => tag !== item) //On retire le filtre
        this.filteredList.forEach(photographer => {
            let keep = false;
            photographer.tags.forEach(tag => {  //On parcourt les tags des photographes
                if (this.filters.includes(tag)) {  //Si un des tags et activé en tant que filtre alors on garde le photographe
                    keep = true
                }
            })
            if (photographer.tags.includes(item) && !keep) { //Si le photographe à le tag à retirer et qu'il n'a pas d'autre filtres actifs on le retire
                this.filteredList = this.filteredList.filter(person => person !== photographer)
            }
        })

        this.visibility()
    }

    add(photographer) {
        this.all.push(photographer)
    }

    addHTML(html) {
        this.html += html
    }

    hydrate() {  //Génération du code HTML pour chaque photographe

        this.all.forEach(photographer => {
            this.addHTML(new Photographer(photographer).html)
        })

    }


    displayTags() {
        const tags = new Set([])
        this.all.forEach(photographer => {
            photographer.tags.forEach(tag => {
                tags.add(tag)
            })
        })
        document.querySelector('nav').insertAdjacentHTML('beforeend', [...tags].map(tag =>
            `<a href="#${tag}" class="tag ${tag}">#${tag}</a>`).join(''))
    }

    handleClick() {
        let tags = [...document.getElementsByClassName('tag')]
        tags.forEach(tagDOM => tagDOM.addEventListener('click', (e) => {
            e.preventDefault()
            const tag = tagDOM.className.split(' ')[1]
            let select = [...document.getElementsByClassName(tag)]
            if (!this.filters.includes(tag)) { //Si le filtre n'est pas déja activé on l'ajoute
                select.forEach(button => {
                    button.style.backgroundColor = '#911616'
                    button.style.color = 'white'
                })
                this.addFilter(tag)
            } else { //Sinon on le supprime
                this.deleteFilter(tag)
                select.forEach(button => {
                    button.style.backgroundColor = 'transparent'
                    button.style.color = '#911616'
                })
            }
            console.log('Photographes filtrés: ', this.filteredList)
            console.log('Filtres actifs: ', this.filters)
        }))
    }

    display() {
        document.getElementById('photographers').insertAdjacentHTML('beforeend', this.html)
    }
}