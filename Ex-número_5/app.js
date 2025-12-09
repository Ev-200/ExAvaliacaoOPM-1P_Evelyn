let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)
console.log(numeroSorte)

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
        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 2 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 2) {
            alert("Quase lá!!")

            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10")
            ntentativas = ntentativas + 1
            console.log(ntentativas)
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte > adivinhar) {
            alert("muito abaixo")

            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte < adivinhar) {
            alert("muito acima")

            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (ntentativas == 5) {
            alert("Última ")
        }
    }
}
