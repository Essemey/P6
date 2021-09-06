

class ListBox {



    static handleOpening() {

        console.log('handleOpening')

        const openButton = document.querySelector('#listbox #open')

        openButton.addEventListener('click', () => {
            const filters = document.querySelector('#listbox #content')
            if (filters.className === 'closed') {
                openButton.innerHTML = '&#xE5CE'
                openButton.className = 'material-icons expand_less'
                filters.className = 'open'
            } else {
                openButton.innerHTML = '&#xE5CF'
                openButton.className = 'material-icons expand_more'
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

        return `<div id="listbox">
            <div class='btn-grp'>
                <button id="popular" data-current='true'>Trier par popularité</button>
                <button id="open" class="material-icons expand_more">&#xE5CF</button>
            </div>
            <div id="content" class="closed">
                <button id="date">Trier par Date</button>
                <button id="title">Trier par Titre</button> 
            </div>
        </div>`
    }

}

export default ListBox