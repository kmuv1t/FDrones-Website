function Integrantes(aluno){
    let card = document.createElement("div")
    card.classList.add("card")
    
    let icone = document.createElement("img")
    icone.src = aluno.icone

    let nome = document.createElement("span")
    nome.classList.add("nome")
    nome.innerText = aluno.nome

    let rm = document.createElement("span")
    rm.classList.add("rm")
    rm.innerText = aluno.rm
    
    let sala = document.createElement("span")
    sala.classList.add("sala")
    sala.innerText = aluno.sala

    card.appendChild(icone)
    card.appendChild(nome)
    card.appendChild(rm)
    card.appendChild(sala)

    return card
}