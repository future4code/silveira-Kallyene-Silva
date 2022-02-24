//-------Exercícios de interpretação de código-----//

//1.
//o código está percorrendo os números abaixo de 5, iniciando em 0, para adicionar ao "valor" que inicia em zero.
//será impresso: 10

//2. 
//a. será impresso: 19, 21, 23, 25, 27, 30
//b. 
//let lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 17, 30]
//for(let numero of lista){
//    if(numero > 18){
//        console.log(`${numero} índice: ${lista[numero]}`)
//    }
//}




//-------Exercícios de escrita de código-------//

//1. 
//var quantidadeDePets = +prompt(`Quantos pets você tem?`)
function imprimeNomesDosPets(pets){
    if(pets === 0){
        console.log(`Que pena!, Você pode adotar um pet!`)
        }else{
            for(let i = 0; i < pets; i++){//                var nomesDosPets = prompt(`Qual o nome do seu ${i+1}º pet?`)
                console.log(nomesDosPets)
            }
        }
}
imprimeNomesDosPets(quantidadeDePets)


//2.
const arrayOriginal = [23, 56, 3, 12, 789, 4, 90, 87, 45];
//a.
function imprimeCadaUmDosValoresdoArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
imprimeCadaUmDosValoresdoArray(arrayOriginal)
//b.
function imprimeCadaUmDosValoresDivididosPor10(array){
    for(let i = 0; i < array.length; i++){
        console.log((array[i])/10)
    }
}
imprimeCadaUmDosValoresDivididosPor10(arrayOriginal)

//c. NÃO CONSEGUI FAZER
function criaNovoArray(array){
    for(let i = 0; i < array.length; i++){
        var novoArray = [array[i].push()]
    }
}
criaNovoArray(arrayOriginal)

//d. NÃO CONSEGUI FAZER
function criaNovoArrayDeStrings(array){
    for(let i = 0; i < array.length; i++){
        var novissimoArray = [array[i].push()]
    }
}
criaNovoArrayDeStrings(arrayOriginal)


//e. NÃO SEI NEM POR ONDE COMEÇAR
let valorMinimo
let valorMaximo

==============================================================


