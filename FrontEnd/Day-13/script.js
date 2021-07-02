let main = document.querySelector('.memes')
let text = document.querySelector('.text')
function gettext(event) {
    text=event.target.value
}

function getimage() {
    main.innerHTML=""
    fetch(`https://meme-api.herokuapp.com/gimme/wholesomememes/${text}`)
        .then(res => res.json())
        .then(data => {
            data.memes.forEach((memes) => {
                let src = "" + memes.preview[2]
                let image = document.createElement("img")
                image.src = src
                main.appendChild(image)
            })
        })
        .catch(error => console.log(error))
}