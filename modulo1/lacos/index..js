//-------Exercícios de interpretação de código-------//

//1. O valor impresso será 10, isso porque o valor inicial é 0, e depois haverá soma de "valor" +0, +1, +2, +3, +4.


//2.
//a. 19, 21, 23, 25, 27, 30.
//b. Sim, o for off é suficiente, devendo ser reescrito assim:
//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let i of lista) {
//    console.log(i)
//}


//3.
//*
//**
//***
//****
//*****
//Obs: não consegui entender a lógica do código




//-------Exercícios de escrita de código-------//

//1. 
const pets = Number(prompt("Quantos bichinhos de estimação você tem?"))
//a. 
let nomes = []
if (pets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
    //b. 
} else if (pets > 0) {
    alert("Digite os nomes deles um a um")
    for (let index = 0; index < pets; index++) {
        nomes[index] = prompt("Nome")
    }
    for (let index = 0; index < pets; index++) {
        console.log(nomes[index])
    }
    //c.
    console.log(nomes)
}


//2.
const arrayOriginal = [13, 24, 56, 78, 23, 45];

//a.
function imprimeValoresDoArray(array){
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
imprimeValoresDoArray(arrayOriginal)    

//b.
function imprimeValoresDoArrayDivididosPor10(array){
    for(let i = 0; i < array.length; i++){
        console.log((array[i])/10)
    }
}
imprimeValoresDoArrayDivididosPor10(arrayOriginal)

//c. NÃO CONSEGUI FAZER
const novoArray = []
function somentePares(array){
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
           novoArray = novoArray.push()
        }
    }
}
somentePares(novoArray)

//d. NÃO CONSEGUI FAZER
const novissimoArray = []
function strings(array){
    for(let i = 0; i < array.length; i++){
        console.log(`O elemento do índex ${i} é: ${toString.array[i]}.`)
    }
}
console.log(strings(novissimoArray))

//e. NÃO CONSEGUI FAZER (não sei nem por onde começar)
let maior = []
let menor = []
function mostraMaiorNumero(array){
    for(let i = 0; i < array.length; i++){
        if((array[i])>..... //desisto )) {

        }
    }
}


//-------Desafios-------//
//Não consegui sequer começar.

