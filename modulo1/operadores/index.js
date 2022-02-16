//Exercícios de interpretação de código

/*
1. a. false
b. false
c. true
d. boolean


2. o problema é que os resultados obtidos no prompt vem em formato de string, e não number, como o código do colega pretende.
no presente caso, o console.log imprimiria primeiraString + segundaString.


3. let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/


//Exercícios de escrita de código

//1.
let nome = Number(prompt("Qual seu nome?"))
let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
console.log("A diferença de idade é de ", idade - idadeAmigo, "anos")


//2.
let numeroPar = Number(prompt("Informe um número par"))
console.log("O resto da divisão desse número por 2 é", numeroPar % 2)
//O padrão é que o resultado é sempre 0 pois todos os números pares são divisíveis por 2.
//Caso o usuário insira um número ímpar, o resultado do resto da divisão por 2 será 1.


//3. 
let idadeEmAnos = Number(prompt("Informe sua idade"))
console.log("Você tem ", idadeEmAnos * 12, "meses de idade")
console.log("Você tem ", idadeEmAnos * 12 * 30, "dias de idade")
console.log("Você tem ", idadeEmAnos * 12 * 30 * 24, "horas de idade")


//4.
let numero1 = Number(prompt("Informe um número"))
let numero2 = Number(prompt("Informe outro número"))

console.log("O primeiro número é maior que o Segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo número?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)


//Desafios

//1.
//a.
let temperaturaEmFahrenheit = 77
let conversaoParaKelvin = (temperaturaEmFahrenheit - 32)*(5/9) + 273.15
console.log(conversaoParaKelvin)

//b.
let temperaturaEmCalsius = 80
let conversaoParaFahrenheit = (temperaturaEmCalsius)*(9/5) + 32
console.log(conversaoParaFahrenheit)

//c.
let temperaturaCelsius2 = 30
let conversaoParaF2 = (temperaturaCelsius2)*(9/5) + 32
let conversaoParaKelvin2 = (temperaturaCelsius2 + 273.15)
console.log(conversaoParaF2)
console.log(conversaoParaKelvin2)

//d.
let temperaturaCelsius2 = Number(prompt("Insira a temperatura em graus Celsius"))
let conversaoParaF2 = (temperaturaCelsius2)*(9/5) + 32
let conversaoParaKelvin2 = (temperaturaCelsius2 + 273.15)
console.log(conversaoParaF2)
console.log(conversaoParaKelvin2)


//2.
let kWHora = +prompt("Informe a quantidade de quilowatt-hora")
console.log("O consumo de energia é de R$", kWHora * 0.05)

//a.
console.log("O consumo de energia de 280 KW/H é de R$", 280 * 0.05)

//b.
let desconto = (15 * kWHora) / 100
let resultadoComDesconto = kWHora - desconto
console.log("O desconto é de R$", desconto, "resultando em", resultadoComDesconto)


//3.

//a.
let libras = 20
let libraParaQuilograma = libras * 0.45359237
console.log(libraParaQuilograma)

//b.
let onças = 10.5
let onçaParaquilograma = onças * 0.02834952
console.log(onçaParaquilograma)

//c.
let milhas = 100
let milhasParaMetros = milhas * 0.0000254
console.log(milhasParaMetros)

//d.
let pes = 50
let pesParaMetro = pes * 0.3048
console.log(pesParaMetro)

//e.
let galao = 103.56
let galaoParaLivro = galao * 3.785411784
console.log(galaoParaLivro)

//f.
let xicara = 450
let xicaraParaLitro = (xicara * 6) / 25
console.log(xicaraParaLitro)

//g.
let xicara = +prompt("Informe quantas xícaras você quer calcular")
let xicaraParaLitro = (xicara * 6) / 25
console.log(xicaraParaLitro)

