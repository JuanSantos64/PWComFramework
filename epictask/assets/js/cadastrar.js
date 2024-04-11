document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    // console.log("Clicou no botão")

    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    // validar(tarefa)
    if(validar(tarefa)){
        console.log(tarefa)
        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "/"
    }



})

function validar(tarefa) {
    let deuCerto = true
    limparErros()

    if (tarefa.titulo.trim() === "") {
        document.querySelector("#titulo-error").innerText = "O titulo é obrigatório"
        document.querySelector("#titulo").classList.add("is-error")
        deuCerto = false
    }
    if (tarefa.descricao === "") {
        document.querySelector("#descricao-error").innerText = "A descrição é obrigatório"
        document.querySelector("#descricao").classList.add("is-error")
        deuCerto = false
    }
    if (tarefa.pontos <= 0) {
        document.querySelector("#pontos-error").innerText = "Pontos devem ser maior do que zero"
        document.querySelector("#pontos").classList.add("is-error")
        deuCerto = false
    }
    return deuCerto
}
function limparErros() {
    document
        .querySelectorAll(".nes-input.is-error, .nes-textarea.is-error")
        .forEach(campo => campo.classList.remove("is-error"))

    document
        .querySelectorAll("span.is-error")
        .forEach(span => span.innerText = "")
}