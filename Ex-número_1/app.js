let popuptexto = "Olá Mundo!"
alert(popuptexto)

let nome = prompt("escreve o teu nome")
console.log("o teu nome é: " + nome)
// alert("olá " + nome + "!")
alert(`Olá ${nome.trim()}!`)

let artistanome = prompt("Escreve o nome de um dos teus artistas multimédia de eleição")
alert("Não conheço a/o " + artistanome + "! Eu gosto muito da Mileece: https://www.mileece.is/bio")
let continuar = prompt("Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não")

console.log(continuar)

alert(`Escreveste ` + continuar)
