let numeroSorte = Math.random() * 100 + 1
numeroSorte = Math.floor(numeroSorte)
console.log(numeroSorte)

alert("Olá Mundo! Adivinha o número em que estou a pensar.")
let adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100")
adivinhar = Math.floor(Number(adivinhar))

console.log("nº sorte:" + numeroSorte, "nº visitante:" + adivinhar)

let ganhou = false

if (adivinhar > 100 || adivinhar <= 0) {
    alert("esse número não é válido, recomeça")
} else {
    while (!ganhou) {
        if (numeroSorte === adivinhar) {
            alert("Certo!!")
            ganhou = true
        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 5 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 5) {
            alert("Está perto!!")

            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte > adivinhar) {
            alert("muito abaixo")

            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte < adivinhar) {
            alert("muito acima")

            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100")
            adivinhar = Math.floor(Number(adivinhar))
        }
    }
}


