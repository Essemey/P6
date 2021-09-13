

class ListBox {



    static handleOpening() {

        console.log('handleOpening')

        const openButton = document.querySelector('#listbox #open')

        openButton.addEventListener('click', () => {
            const filters = document.querySelector('#listbox #content')
            if (filters.className === 'closed') {
                openButton.innerHTML = 'expand_less'
                openButton.ariaExpanded = "true"
                filters.className = 'open'
            } else {
                openButton.innerHTML = 'expand_more'
                openButton.ariaExpanded = "false"
                filters.className = 'closed'
            }
        })
    }


    static switch(currentId) {

        const old = document.querySelector('[data-current]')

        const oldId = old.id
        const oldText = old.textContent

        const current = document.getElementById(currentId)

        old.id = current.id
        old.textContent = current.textContent

        current.id = oldId
        current.textContent = oldText


    }

    render() {

        return `<div class="listbox-container">
                    <label for="listbox">Trier par</label>
                    <div id="listbox">
                        <div class='btn-grp'>
                            <button id="popular" data-current='true' >Trier par popularité</button>
                            <button id="open" role="button" aria-haspopup="listbox" aria-expanded="false" class="material-icons">expand_more</button>
                        </div>
                        <div id="content" class="closed" aria-activedescendant >
                            <button id="date">Trier par Date</button>
                            <button id="title">Trier par Titre</button> 
                        </div>
                    </div>
                </div>`
    }

}

export default ListBox