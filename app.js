'use strict';

let banco = [
    {"tarefa":"teste", "status":"checked"},
    {"tarefa":"teste 2", "status":"checked"},
    {"tarefa":"teste 3", "status":""}
]


const criarItem = (tarefa, status="", indice) => {
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = 
    `<input type="checkbox" ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X" data-indice=${indice}>`
    document.getElementById("todoList").appendChild(item)
}

const limparTarefas = () => {
    const todoList = document.getElementById("todoList")
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizarTela = () => {
    limparTarefas()

    banco.forEach ((item, indice) => criarItem(item.tarefa, item.status, indice))
}

const inserirItem = (evento) => {
    const tecla = evento.key
    const texto = evento.target.value

    if (tecla === "Enter") {
        banco.push ({"tarefa": texto, "status": ""})
        atualizarTela()
        evento.target.value = ""
    }
}

const removerItem = (indice) => {
    banco.splice (indice, 1)
    atualizarTela()
}

const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status === "" ? "checked" : ""
    atualizarTela()
}

const clickItem = (evento) => {
    const elemento = evento.target

    if (elemento.type === "button") {
        const indice = elemento.dataset.indice
        removerItem(indice)

    } else if (elemento.type === "checkbox") {
        const indice = elemento.dataset.indice
        atualizarItem(indice)
    }
}

document.getElementById("newItem").addEventListener("keypress", inserirItem)
document.getElementById("todoList").addEventListener("click", clickItem)

atualizarTela() //é chamado quando o banco é atualizado