//-------Exercícios de interpretação de código-------//

//1.

//a.
//10
//50

//b.
//undefined

//2.

//a.
//A função pega o texto do usuário, transforma tudo em letras minúsculas e procura "cenoura" no conteúdo, retornando true ou false. Por fim, imprime a resposta que é o texto do usuário formatado.

//b.
//i. true, eu gosto de cenoura
//ii. true, cenoura é bom pra vista
//iii. false, cenouras crescem na terra


//-------Exercícios de escrita de código-------//

//1. 

//a.
const nomeX = "Kallyene"
const idadeX = 31
const cidadeX = "Uberaba"
const profissaoX = "estudante"
const resultadoX = `Eu sou ${nomeX}, tenho ${idadeX} anos, moro em ${cidadeX} e sou ${profissaoX}`

function informacoesDoUsuario() {
    console.log(resultadoX)
}

informacoesDoUsuario()

//b.
function imprimirInformacoes(nome, idade, cidade, profissão) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`
}

imprimirInformacoes("Helia", 57, "Uberaba", "diarista")


//2.
//a.
function somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
}
console.log(somar(10, 20))

//b.
function retornarBooleano(numeroUm, numeroDois) {
    return numeroUm >= numeroDois
}
console.log(retornarBooleano)

//c.
function retornarPar(umNumero) {
    return umNumero % 2 === 0
}
console.log(retornarPar(3))

//d.
function retornarMensagem(string) {
    console.log("O comprimento da mensagem é de", string.length, "caracteres/espaços")
    console.log(string.toUpperCase())
}
retornarMensagem("Teste da mensagem")


//3.
function imprimirNumeros(primeiro, segundo) {
    console.log(`Os números escolhidos foram ${primeiro} e ${segundo}`)
}
function soma(primeiro, segundo) {
    return primeiro + segundo
}
function diferenca(primeiro, segundo) {
    return primeiro - segundo
}
function multiplicacao(primeiro, segundo) {
    return primeiro * segundo
}
function divisao(primeiro, segundo) {
    return primeiro / segundo
}

const primeiroNumeroDoUsuario = +prompt(`Informe um número`)
const segundoNumeroDoUsuario = +prompt(`Informe outro número`)
console.log(imprimirNumeros(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))
console.log(soma(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))
console.log(diferenca(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))
console.log(multiplicacao(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))
console.log(divisao(primeiroNumeroDoUsuario, segundoNumeroDoUsuario))

