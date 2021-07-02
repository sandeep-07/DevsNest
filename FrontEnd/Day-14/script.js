function focusevent() {
    document.querySelector('.name').style.backgroundColor = "blue"
}

function changeevent() {
    var e = document.getElementById("branch");
    var value = e.options[e.selectedIndex].value;

    var text = e.options[e.selectedIndex].text;
    console.log(text)
    document.querySelector('.test').innerHTML = `You chose ${text} branch`
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
}