function Drones(drone){
    let card = document.createElement("div")
    card.classList.add("card")
    
    let icone = document.createElement("img")
    icone.src = drone.drone

    let entrega = document.createElement("span")
    entrega.classList.add("entrega")
    entrega.innerText = drone.entrega

    let modelo = document.createElement("span")
    modelo.classList.add("modelo")
    modelo.innerText = drone.modelo

    let preco = document.createElement("div")
    preco.classList.add("preco")

    let valor = document.createElement("span")
    valor.classList.add("nome")
    valor.innerText = drone.valor

    let dolar = document.createElement("span")
    dolar.classList.add("material-icons")
    dolar.classList.add("dolar")
    dolar.innerText = "attach_money"

    let real = document.createElement("span")
    real.classList.add("price")
    real.innerText =  drone.valor

    preco.appendChild(dolar)
    preco.appendChild(real)

    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = drone.botao

    card.appendChild(icone)
    card.appendChild(entrega)
    card.appendChild(modelo)
    card.appendChild(preco)
    card.appendChild(botao)

    return card
}