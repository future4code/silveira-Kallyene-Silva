//-------Exercícios de interpretação de código-------//
//1.
//a. O código testa se o número fornecido pelo usuário é divisível por 2 com resto 0.
//b. Para todos os números pares, imprime "Passou no teste"
//c. Para todos os números ímpares, imprime "Não passou no teste"

//2.
//a. O código informa o preço das frutas.
//b. "O preço da fruta Maçã é R$2,25"
//c. "O preçoda fruta Pêra é R$5"

//3.
//a. Pedindo um número ao usuário, que retornará como string, e ao mesmo tempo, transformando essa string em number
//b. "Esse número passou no teste" Se fosse -10, a mensagem seria apenas undefined
//c. Sim, haverá um erro por não ter um retorno referente aos números que não passarem no teste. Haverá ainda outro erro referente à variável "mensagem" que foi definida somente dentro do escopo da condicional, ficando inacessível no escopo global


//1.
//a. e b.
const idade = Number(prompt(`Qual a sua idade?`))
//c;
if (idade >= 18) {
    console.log(`Você pode dirigir`)
}else{
    console.log(`Você não pode dirigir`)
}

//2.
const periodoEmQueEstuda = prompt(`Em qual período você estuda? Matutino(M), Vespertino(V) ou Noturno(N)?`)
if (periodoEmQueEstuda === "M") {
    console.log("Bom dia!")
    }else if (periodoEmQueEstuda === "V"){
        console.log("Boa tarde!")
    }else if (periodoEmQueEstuda === "N"){
        console.log("Boa noite!")
}

//3.
const periodo = prompt(`Qual seu período de estudos? (M, V, N)`)
switch (periodo) {
    case "M":
        console.log("Bom diaa!")
        break
    case "V":
        console.log("Boa tardee!")
        break
    case "N":
        console.log("Boa noitee!")
        break
}


//4.
const filme = prompt("Qual o gênero do filme?")
const preço = Number(prompt("Qual o preço do ingresso?"))

if (filme === "Fantasia" || filme === "fantasia" && preço < 15) {
    const lanche = prompt("Qual lanchinho você vai querer?")
    console.log(`Bom filme, e aproveite o seu ${lanche}`)
}else{
    console.log("Escolha outro filme :(")
}


//-------Desafios-------//
//1. modificar o exercícios 4 (feito)

//2. 
const nome = prompt("Qual seu nome?")
const jogo = prompt("Qual o tipo de jogo que você verá? Internacional (IN) ou Doméstico (DO)?")
const etapa = prompt("Qual a etapa do jogo? (SF - semi-final, DT - decisão de terceiro lugar, FI - final)")
const categoria = prompt("Qual a categoria? (1, 2, 3 ou 4)")
const quantidade = Number(prompt("Quantos ingressos você vai querer?"))
const preço

if(etapa === "SF" && categoria === 1){
    preço = 1320.00
}else if(etapa === "SF" && categoria === 2){
    preço = 880.00
}else if(etapa === "SF" && categoria === 3){
    preço = 550.00
}else if(etapa === "SF" && categoria === 4){
    preço = 550.00
}else if(etapa === "DT" && categoria === 1){
    preço = 660.00
}else if(etapa === "DT" && categoria === 2){
    preço = 440.00
}else if(etapa === "DT" && categoria === 3){
    preço = 330.00
}else if(etapa === "DT" && categoria === 4){
    preço = 170.00
}else if(etapa === "FI" && categoria === 1){
    preço = 1980.00
}else if(etapa === "FI" && categoria === 2){
    preço = 1320.00
}else if(etapa === "FI" && categoria === 3){
    preço = 880.00
}else if(etapa === "FI" && categoria === 4){
    preço = 330.00
}else if(jogo === "IN"){
    const preçoTotal = (preço * quantidade) * 4.10
}else if(jogo === "DO"){
    const preçoTotal = (preço * quantidade)
}
console.log(`Paraéns ${nome}, pela compra! Você comprou ${quantidade} ingressos do tipo ${jogo}, da etapa de ${etapa}, categoria ${categoria}. Valor unitário: R$${preço}. Valor total: R$${preçoTotal}`)

