let nome= "Jogador"
let patente = document.querySelector(".patente span")


function mostrar(){
let experiencia = document.querySelector(".experiencia span")
let nivel = Math.floor(Math.random() * 10000) + 1
experiencia.textContent = `${nivel}`

switch (true){
    case nivel < 1000:
        patente.textContent = "FERRO"
        break
    case nivel > 1000 && nivel < 2000:
        patente.textContent = "BRONZE"
        break
     case nivel > 2000 && nivel < 3000:
        patente.textContent = "PRATA"
        break
    case nivel > 3000 && nivel < 6000:
        patente.textContent = "OURO"
        break
    case nivel > 6000 && nivel < 8000:
            patente.textContent = "PRATINA"
            break
        case nivel > 8000 :
            patente.textContent = "DIVINO"
            break
}}

