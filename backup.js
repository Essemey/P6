
//SELECT DOM ELEMENT
const photographers = document.getElementById('photographers')




async function getPhotographs() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6')
    const users = await response.json()

    if (response.ok) {
        users.forEach(user => {

            //CREATE DOM ELEMENTS
            const photograph = document.createElement('article')

            const authorHeader = document.createElement('a')
            const authorImg = document.createElement('img')
            const authorName = document.createElement('h2')

            const authorInfos = document.createElement('p')
            const authorCity = document.createElement('span')
            const authorDescription = document.createElement('span')
            const authorPrice = document.createElement('span')

            const authorTags = document.createElement('div')
            const tag = document.createElement('a')

            //CLASSNAME
            photograph.className = "photograph"
            authorHeader.className = "authorHeader"
            authorInfos.className = "authorInfos"
            authorCity.className = "city"
            authorDescription.className = "description"
            authorPrice.className = "price"
            authorTags.className = "authorTags"
            tag.className = "tag"

            //APPEND DOM ELEMENTS
            authorHeader.appendChild(authorImg)
            authorHeader.appendChild(authorName)

            authorInfos.appendChild(authorCity)
            authorInfos.appendChild(authorDescription)
            authorInfos.appendChild(authorPrice)

            authorTags.appendChild(tag)

            photograph.appendChild(authorHeader)
            photograph.appendChild(authorInfos)
            photograph.appendChild(authorTags)
            photographers.appendChild(photograph)

            console.log(user.id)
        })
    }

}

getPhotographs()

