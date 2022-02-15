//1. 10
//10 5

//2. 20 10 10

//3. p:  horasDeTrabalho
//t: salarioPorDia
//O programa cria um alerta no navegador informando quanto a pessoa recebe por hora fazendo uma operação de X dividido por Y, sendo X o valor que recebe por dia, divido pelas horas trabalhadas.


let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

//o tipo impresso acima será indefined, isso porque as variáveis foram declaradas mas não receberam nenhum valor, o que se assemelha ao typeof null.

let nome = prompt
let idade = prompt

console.log(typeof nome)
console.log(typeof idade)

//o tipo impresso acima será string, isso porque todos os dados fornecidos pelo usuário sempre chegam nesse formato.

console.log("Olá,", nome, ", você tem", idade, "anos")



let hojeESegundaFeira
let estouUsandoRoupasPretas
let aAulaDeHojeFoiFacil

hojeESegundaFeira = "SIM"
estouUsandoRoupasPretas = "SIM"
aAulaDeHojeFoiFacil = "NÃO"

console.log("Segue abaixo as três perguntas:")
console.log("Hoje é segunda feira? Resposta", hojeESegundaFeira)
console.log("Estou usando roupas pretas? Resposta", estouUsandoRoupasPretas)
console.log("A aula de hoje foi fácil? Resposta", aAulaDeHojeFoiFacil)

let a = 10
let b = 25

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
