const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

console.log(tarefas)

tarefas.forEach( (tarefa) => {
    const card = document.createElement("div")
    card.classList.add("nes-container", "with-title", "is-centered")
    card.innerHTML = `
    <p class="title">${tarefa.titulo}</p>
    <p>${tarefa.descricao}</p>
    <a href="#" class="nes-badge is-icon">
        <span class="is-warning"><i class="nes-icon trophy is-small"></i></span>
        <span class="is-primary">${tarefa.pontos}</span>
      </a>
      <progress class="nes-progress is-pattern" value="100" max="100"></progress>
      
          <button type="button" class="nes-btn is-error">Apagar</button>

    `
    document.querySelector("#lista-de-tarefas").appendChild(card)
})