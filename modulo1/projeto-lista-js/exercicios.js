// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt(`Informe a altura do retângulo`)
  const largura = prompt(`Informe a largura do retângulo`)
  resultado = altura * largura
  console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Informe o ano atual")
  const anoDeNascimento = prompt("Informe seu ano de nascimento")
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu e-mail?")
  resultado = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(resultado)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Me diga uma cor favorita")
  const cor2 = prompt("Me diga outra cor favorita")
  const cor3 = prompt("Me diga uma última cor favorita")
  resultado = [cor1, cor2, cor3]
  console.log(resultado)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const resultado = string.toUpperCase()
  return resultado
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const resultado = custo / valorIngresso
  return resultado
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const resultado1 = string1.length
  const resultado2 = string2.length
  const resultado = resultado1 === resultado2
  return resultado
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  resultado = array[0]
  return resultado
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  resultado = array[array.length-1]
  return resultado
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroItem = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = primeiroItem
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const primeiraFrase = string1.toUpperCase()
  const segundaFrase = string2.toUpperCase()
  resultado = primeiraFrase === segundaFrase
  return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual é o ano atual?")
  const anoDeNascimento = prompt("Qual é o seu ano de nascimento?")
  const anoDeEmissaoDaCarteira = prompt("Em qual ano sua carteira de identidade foi emitida?")

  const idade = anoAtual - anoDeNascimento
  const validadeDaCarteira = anoAtual - anoDeEmissaoDaCarteira
  
  const reovar1 = (idade <= 20) && (validadeDaCarteira >= 5)
  const renovar2 = (idade >=20) && (idade <= 50) && (validadeDaCarteira >= 10)
  const renovar3 = (idade > 50) && (validadeDaCarteira >= 15)

<<<<<<< HEAD
  return renovar1 || renovar2 || renovar3
=======
  const renovar = renovar1 && renovar2 && renovar3
  return renovar
>>>>>>> f41fac1def24d2da70c6c8151d49b793b4e6287a
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}