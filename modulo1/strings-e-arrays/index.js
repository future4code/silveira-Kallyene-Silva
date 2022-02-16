//-------Exercícios de interpretação de código

//1.
//a.null
//b.null
//c.11
//d.3
//e.3,4,5,6,7,8,9,10,11,12,13
//f.9

//2.
//SUBI NUM ÔNIBUS EM MARROCOS, 27

//-------Exercícios de escrita de código

//1.
const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail?")
const mensagem = `O e-mail ${email} foi cadastrado com sucesso.`
const mensagem2 = `Seja bem-vinta(o), ${nome}!`
console.log(mensagem, mensagem2)
//2.
const comidas = [`arroz`, `feijão`, `carne moída`, `panqueca`, `macarrão`]
//a. 
console.log(comidas)
//b.
console.log(`Essas são as minhas comidas preferidas:`)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
//c.
const comidaDoUsuario = prompt(`Qual sua comida preferida?`)
comidas.splice(1,1)
comidas.push(comidaDoUsuario)
console.log(comidas)

//3.

//a.
const listaDeTarefas = []
//b.
const listaDeTarefas1 = prompt(`Primeira tarefa do dia`)
const listaDeTarefas2 = prompt(`Segunda tarefa do dia`)
const listaDeTarefas3 = prompt(`Terceira tarefa do dia`)
listaDeTarefas.push(listaDeTarefas1)
listaDeTarefas.push(listaDeTarefas2)
listaDeTarefas.push(listaDeTarefas3)
//c.
console.log(listaDeTarefas)
//d.
const tarefaRealizada = +prompt("Digite o índice de uma tarefa já realizada")
//e.
listaDeTarefas.splice(tarefaRealizada, 1)
//f.
console.log(listaDeTarefas)
console.log(`Parabéns! Você concluiu com sucesso a tarefa de nº ${tarefaRealizada +1}.`)
