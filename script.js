let inputElement = document.getElementById("campo")
let buttonElement = document.querySelector("#app button");
let listElement = document.querySelector("#app ul");
let msgElement = document.querySelector("#msg")
let msgElement2 = document.querySelector("#msg2")

let tarefas = JSON.parse(localStorage.getItem("@tarefas")) || []; 


function renderTarefas() {

    listElement.innerHTML = ' ';

    tarefas.map((todo) => {

        let liElement = document.createElement("li")
        let tarefaText = document.createTextNode(todo)


        let buttonExcluir = document.createElement("button")
        let procurar = tarefas.indexOf(todo)
        buttonExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>'
        buttonExcluir.setAttribute("href", "#")
        buttonExcluir.setAttribute("onclick", `deletarTarefa(${procurar})`)

        liElement.appendChild(tarefaText)
        liElement.appendChild(buttonExcluir)
        listElement.appendChild(liElement)
    })


}

renderTarefas();

function adicionarTarefas() {

    if (inputElement.value === '') {
        msgElement.style.display = 'block'
        setTimeout(() => {
            msgElement.style.display = 'none'
        }, 3000)
        // return false;
    }
    else {

        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);

        inputElement.value = '';

        msgElement2.style.display = 'block'

        setTimeout(() => {
            msgElement2.style.display = 'none'
        }, 3000)

        renderTarefas();
        salvarTarefas();

    }
}

function deletarTarefa(procurar) {

    tarefas.splice(procurar, 1)
    renderTarefas();
    salvarTarefas();
}

function salvarTarefas() {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas))
    renderTarefas();
}


