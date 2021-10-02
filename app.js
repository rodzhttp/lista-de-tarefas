let banco = [
    {"task": "estudar", "status": "checked"}
]

const criarItem = (task, status="") => {
    const item = document.createElement("label");
    item.classList.add("item");
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${task}</div>
        <input type="button" value="X">
    `
    document.getElementById("todolistt").appendChild(item);

}

const cleanTask = () => {
    const todolistt = document.getElementById("todolistt")
    while (todolistt.firstChild) {
        todolistt.removeChild(todolistt.lastChild)
    }
}

const atualizarTela = () => {
    cleanTask()
    banco.forEach(item => criarItem (item.task, item.status))
}

const addItem = (evento) => {
    const tecla = evento.key;
    if (tecla === "Enter") {
        banco.push ({"task": "testee1", "status": "checked"});
        atualizarTela()
    }
}

document.getElementById("newitem").addEventListener("keypress", addItem);

atualizarTela();