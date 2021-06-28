//jshint esversion:6;
let main = document.querySelector('.main')
let words = ["stark", "hulk", "rogers", "thanos",
    "thor", "nat", "wanda", "marvel"
]
let frontImg = "https://media.tenor.com/images/8d7d2e757f934793bb4154cede8a4afa/tenor.gif"
let imgs = [
    "https://media.tenor.com/images/75c2e9c9443ecdd479fe4f9c42150dd3/tenor.gif",
    "https://media.tenor.com/images/eff00d152649a1e1b7f8a63486f26f92/tenor.gif",
    "https://media.tenor.com/images/eb8de1566a0b5d119fe83f0870cfb581/tenor.gif",
    "https://media.tenor.com/images/e32a0bcd1ee692f13f9fcad63f4f6b62/tenor.gif",
    "https://media.tenor.com/images/bc8ff9b0f2271982a4592c205c9084b6/tenor.gif",
    "https://media.tenor.com/images/a889e2bc7ca64dccf1a49a3802ff4809/tenor.gif",
    "https://media.tenor.com/images/b826adf96798a9484f620cd2333407a2/tenor.gif",
    "https://media.tenor.com/images/a730bd67f8fe000f329b016ae0a04099/tenor.gif"
]
imgs=[...imgs,...imgs]
    

let moves = document.querySelector('.moves')
let remmoves=30
let score = document.querySelector('.score')
let scorejs=0
let correct = 0

words = [...words, ...words]

for (let i = 1; i <= 16; i++) {
    let flip_card = document.createElement("div")
    flip_card.classList.add("flip-card")

    let flip_card_inner = document.createElement("div")
    flip_card_inner.classList.add("flip-card-inner")

    let flip_card_front = document.createElement("div")
    var img = document.createElement('img');
    img.src = "https://media.tenor.com/images/7251af741e8dab2addf413a6960399ae/tenor.gif"
    flip_card_front.classList.add("flip-card-front")
    

    let rand_index = Math.floor(Math.random() * (16 - i))
    let rand_name = imgs[rand_index]
    imgs.splice(rand_index, 1);

    // flip_card_inner.addEventListener("click",()=>{
    //     console.log("clicked")
    //     flip_card_inner.classList.toggle('flip')
    // })

    let flip_card_back = document.createElement("div")
    flip_card_back.classList.add("flip-card-back")
    var img = document.createElement('img');
    img.classList.add("backimg")
    img.src = rand_name
    console.log(img.src)
    flip_card_back.appendChild(img)
    // flip_card_back.innerHTML = rand_name

    flip_card_inner.appendChild(flip_card_front)
    flip_card_inner.appendChild(flip_card_back)

    flip_card.appendChild(flip_card_inner)
    main.appendChild(flip_card)


}

let cards = document.getElementsByClassName("flip-card")
// console.log(cards[0])
// console.log(cards[0].firstChild)
let fst = null
let fst_papa = null
let ind = -1
let flag = true
function scoreup() {
    Toastify({
        text: "+10",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () {} // Callback after click
    }).showToast();
}
for (let i = 0; i <= 15; i++) {

    let card = cards[i]
    card.addEventListener("click", () => {
        // card.removeEventListener
        if (flag === false) {
            return;
        }
        if (ind == i) {
            console.log("i ran")
            return;
        }
        remmoves-= 1
        moves.innerHTML=""+remmoves
        if (moves == 0) {

            alert("Game over \n Your Score is: " + correct)
            window.location.reload()

        }
        if (fst != null) {
            var card_inner = card.firstChild
            card_inner.classList.toggle("flip")
            if (fst.lastChild.innerHTML !== card_inner.lastChild.innerHTML) {
                flag = false
                setTimeout(() => {
                    fst.classList.toggle("flip")
                    card_inner.classList.toggle("flip")
                    console.log("not matched")
                    ind=-1
                    fst = null
                    flag = true
                }, 1000)
            } else {
                console.log("matched")
                fst_papa.style.visibility = "hidden"
                card.style.visibility = "hidden"
                scorejs += 10
                scoreup()
                score.innerHTML=""+scorejs
                console.log(correct)
                if (scorejs == 80) {
                    alert("You won")
                    window.location.reload()
                }
                ind = -1
                fst = null
                flag = true
            }
        } else {
            // console.log("fst time")
            var card_inner = card.firstChild
            // console.log(card_inner)
            card_inner.classList.toggle("flip")
            fst = card_inner
            fst_papa = card
            ind = i
        }


    })



}