//-------Exercícios de interpretação-------//

// //1.
// nome: "Amanda Rangel", apelido: "Mandi" 0
// nome: "Laís Petra", apelido: "Laura" 1
// nome: "Letícia Chijo", apelido: "Chijo" 2

// 2. 
// nome: "Amanda Rangel"
// nome: "Laís Petra"
// nome: "Letícia Chijo"

3.
// apelido: Mandi
// apelido: Laura


//-------Exercíios de escrita de código-------//

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
// //a.
const nomesDosPets = pets.map((item, index, array) => {
    return item.nome
})
console.log(nomesDosPets)

// //b. 
const apenasSalsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(apenasSalsichas)

//c.
const mensagemParaPoodles = pets.filter((item, index, array) => {
    return `Você ganhou um cumpm de desconto de 10% para tosar o/a ${item.nome === "Poodle"}.`
}
)
console.log(mensagemParaPoodles)


//2. 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a.
 const apenasNomesDosItens = produtos.map((item, index, array) => {
     return item.nome
})
console.log(apenasNomesDosItens)

//b. NÃO CONSEGUI FAZER
const descontoDe5PorCento = produtos.map((item, index, array) => {
    return item.nome && (item.preço * 5 / 100)
})
console.log(descontoDe5PorCento)

//c.
const apenasBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(apenasBebidas)

//d.

//e.
