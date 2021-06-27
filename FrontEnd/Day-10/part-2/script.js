//jshint esversion:6;
let main = document.querySelector('.main')
let words = ["stark", "rogers", "eye", "hulk",
    "thor", "nat", "nick", "peter"
]
let moves = 30
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
    flip_card_front.innerHTML = "Hey there"

    let rand_index = Math.floor(Math.random() * (16 - i))
    let rand_name = words[rand_index]
    words.splice(rand_index, 1);

    // flip_card_inner.addEventListener("click",()=>{
    //     console.log("clicked")
    //     flip_card_inner.classList.toggle('flip')
    // })

    let flip_card_back = document.createElement("div")
    flip_card_back.classList.add("flip-card-back")
    flip_card_back.innerHTML = rand_name

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
        moves -= 1
        console.log(moves)
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
                }, 500)
            } else {
                console.log("matched")
                fst_papa.style.visibility = "hidden"
                card.style.visibility = "hidden"
                correct += 1
                console.log(correct)
                if (correct == 8) {
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


    // }

}