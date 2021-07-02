function focusevent() {
    document.querySelector('.name').style.backgroundColor = "alicblue"
}

function changeevent() {
    var e = document.getElementById("branch");
    var value = e.options[e.selectedIndex].value;

    var text = e.options[e.selectedIndex].text;
    // console.log(text)

    notify(`You chose ${text} branch`)
}

function clickevent() {
    e.preventDefault()
    console.log(e)
    console.log("I clicked")
}

function submittt(e) {
    // console.log(event)
    console.log(e)
    e.preventDefault()
    notify("Thanks for filling the form")
}

function notify(text) {

    Toastify({
        text: text,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () {} // Callback after click
    }).showToast();
}