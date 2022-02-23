//Exercícios de interpretação de código------------------------
//1.
//a. "Matheus Nachtergaele"
//b. "Virgínia Cavendish"
//c. canal: "Globo", horario: "14h"


//2. 
//a.
//nome: "Juca", idade: 3, raca: "SRD"
//nome: "Juba", idade: 3, raca: "SRD"
//nome: "Jubo", idade: 3, raca: "SRD"
//b. Os três pontos são o comando para espalhamento de um objeto. Ele copia o objeto que vier logo após "..."


//3. 
//a. 
//backender: false
//altura: undefined
//b. O primeiro resultado referente a backender foi false pois o código acessou uma propriedade do objeto e trouxe exatamente o resultado lá presente.
// Em se tratando da altura, retorna undefined pois essa chave não foi incluída no objeto




//Exercícios de escrita de código------------------------------

//1.
//a.
const pessoa = {
    nome: "Kallyene",
    apelidos: ["Kally", "Kaká", "Amorinha"],
}

function imprimirFrase(pessoa){
    console.log(`Eu sou  ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}
imprimirFrase(pessoa)


//b. 
const segundaPessoa = {
    ...pessoa,
    apelidos: ["Teste1", "Teste2", "Teste3"]
}
imprimirFrase(segundaPessoa)


//2.
//a.
const primeiroObjeto = {
    nome: "Kallyene",
    idade: 31,
    profissao: "advogada"
}
const segundoObjeto = {
    nome: "Geni",
    idade: 57,
    profissao: "manicure"
}


//b.
function imprimeValores(objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}
imprimeValores(primeiroObjeto)
imprimeValores(segundoObjeto)


//3. 
//a. 
const carrinho = []
//b. 
const frutas1 = {
    nome: "abacaxi",
    disponibilidade: true
}
const frutas2 = {
    nome: "manga",
    disponibilidade: false
}
const frutas3 = {
    nome: "maçã",
    disponibilidade: true
}


//c. 
function incluirNoCarrinho(fruta) {
    carrinho.push(fruta.nome)
}
incluirNoCarrinho(frutas1)
incluirNoCarrinho(frutas2)
incluirNoCarrinho(frutas3)
//d.
console.log(carrinho)


// Desafios---------------------------------------------------
//1
function dadosDoUsuario() {
    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade")
    const profissao = prompt("Qual sua profissão?")
    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(pessoa)
    console.log(pessoa.typeof)
}
dadosDoUsuario(pessoa)

//2
function filmes() {
    const primeiroFilme = {
        nome: "Harry Potter e a Pedra Filosofal",
        ano: 2001
    }
    const segundoFilme = {
        nome: "Harry Potter a a Câmara Secreta",
        ano: 2002
    }
    return `O primeiro filme foi lançado antes do segundo? ${primeiroFilme < segundoFilme}. O primeiro filme foi lançado no mesmo ano do segundo? ${primeiroFilme === segundoFilme}`
}
//3
function controleDeEstoque(fruta) {
    const estoque = fruta.disponibilidade! //preciso colocar o operador ! para inverter o valor de "disponibilidade" mas não sei como fazer isso.
}
