function Locais(estado){
    let card = document.createElement("div")
    card.classList.add("card")
    
    let icone = document.createElement("img")
    icone.src = estado.icone

    let nome = document.createElement("span")
    nome.classList.add("estado")
    nome.innerText = estado.nome

    card.appendChild(icone)
    card.appendChild(nome)

    return card
}