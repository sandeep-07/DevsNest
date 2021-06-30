let todo = document.getElementById('todo_input')
let ul_group = document.querySelector('.list-group')

function addtodo() {
    console.log(todo.value)
    let li_el = `<li class="list-group-item my-2 bord_rad">
                    ${todo.value}
                    <div>
                        <i class="fas fa-check" onclick="markcomplete()"></i>
                        <i class="far fa-trash-alt "onclick="deletetodo(event)"></i>
                    </div>
                </li>`
    ul_group.innerHTML += li_el

    todo.value = ""
}

function markcomplete() {
    document.querySelector('li').addEventListener('click', (ev) => {
        ev.target.parentElement.classList.toggle("complete")
        console.log(ev.target.parentElement)
    })

}

function deletetodo(event) {
    console.log(event)
    document.querySelector('li').addEventListener('click', (ev) => {
        console.log(ev.target.parentElement.parentElement.remove())
    })
}

document.querySelector('ul').addEventListener('click', (event) => {
    console.log(event.target)

})