let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)
console.log(numeroSorte)
alert("Olá Mundo! Adivinha o número em que estou a pensar. Tens 6 tentativas!")
let adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10")
adivinhar = Math.floor(Number(adivinhar))

console.log("nº sorte:" + numeroSorte, "nº visitante:" + adivinhar)

let ganhou = false

let ntentativas = 0



if (adivinhar > 10 || adivinhar <= 0) {
    alert("esse número não é válido, recomeça")
} else {
    while (!ganhou) {
        if (numeroSorte === adivinhar) {
            alert("Certo!!")
            ganhou = true
        } else if (ntentativas == 5) {
            ntentativas = ntentativas + 1
            alert("Última tentativa")

        } else if (ntentativas == 7) {
            ganhou = true
            alert("Perdeste")
        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 2 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 2) {
            alert("Quase lá!!")
            alert("Ainda tens " + (7 - Number(ntentativas)) + " tentativas")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10")
            ntentativas = ntentativas + 1
            console.log(ntentativas)
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte > adivinhar) {
            alert("muito abaixo")
            alert("Ainda tens " + (7 - Number(ntentativas)) + " tentativas")
            ntentativas = ntentativas + 1
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte < adivinhar) {
            alert("muito acima")
            alert("Ainda tens " + (7 - Number(ntentativas)) + " tentativas")
            ntentativas = ntentativas + 1
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10")
            adivinhar = Math.floor(Number(adivinhar))

        }
    }
}
