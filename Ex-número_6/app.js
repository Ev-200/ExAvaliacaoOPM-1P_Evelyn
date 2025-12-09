alert("Olá Mundo! Vamos fazer contas simples.")
let operacao = prompt("Insirir uma operação: soma, subtração, multiplicação ou divisão")

if (operacao == "+" || operacao == "-" || operacao == "*" || operacao == "/") {
    let nesq = prompt(("inserir o número à esquerda do sinal de ") + (operacao))
    let ndir = prompt(("inserir o número à direta do sinal de ") + (operacao))
    if (operacao == "+") {
        alert(Number(nesq) + Number(ndir))
        console.log(Number(nesq) + Number(ndir))
    } else if (operacao == "-") {
        alert(Number(nesq) - Number(ndir))
        console.log(Number(nesq) - Number(ndir))
    } else if (operacao == "*") {
        alert(Number(nesq) * Number(ndir))
        console.log(Number(nesq) * Number(ndir))
    } else if (operacao == "/") {
        alert(Number(nesq) / Number(ndir))
        console.log(Number(nesq) / Number(ndir))
    } else if (operacao != "+" || "-" || "*" || "/") {
        alert("Operação inválida")
    }
}

