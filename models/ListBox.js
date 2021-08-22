

class ListBox {



    render() {

        return `<div id="listbox">
            <button id="popular">Trier par popularité</button>
            <button id="open">Open</button>
            <div id="content" class="close">
                <button id="date">Trier par Date</button>
                <button id="title">Trier par Titre</button> 
            </div>
        </div>`
    }


    static handleOpening() {

        const openButton = document.querySelector('#listbox #open')

        openButton.addEventListener('click', () => {
            const filters = document.querySelector('#listbox #content')
            if (filters.className === 'close') {
                openButton.textContent = 'Close'
                filters.className = 'open'
            } else {
                openButton.textContent = 'Open'
                filters.className = 'close'

            }
        })
    }


}

export default ListBox