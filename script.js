alert("Iremos solicitar dois números")

let firstNumber = Number(prompt("Digite o primeiro número"))
let secondNumber = Number(prompt("Digite o segundo número"))

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let multi = firstNumber * secondNumber
let div = firstNumber / secondNumber
let restDiv = firstNumber % secondNumber

alert("A soma é " + sum)
alert("A subtração é " + sub)
alert("A multiplicação é " + multi)
alert("A divisão é " + div)
alert("O resto da divisão é " + restDiv)

let imparPar = sum % 2 == 0

if (imparPar) {
    alert("A soma dos números é par. " + sum)
} 
else {
    alert("A soma dos números é impar." + sum)
}

let equal = firstNumber == secondNumber

if(equal) {
    alert("Os números inseridos são iguais.")
}
else {
    alert("Os números inseridos são diferentes.")
}