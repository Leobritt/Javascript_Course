const alunos =  ["Jorge ", "Maria ", "Luis ", "Leonardo ", "Beatriz "]
console.log("Lista: "+alunos); //nao precisa de for p printar

alunos.push("Fernanda");
console.log("Add no fim: "+alunos); //add fim

alunos.unshift("Gustavo ");
console.log("Add no inicio: "+alunos); //add inicio

const removidoFinal= alunos.pop();//remove o ultimo elemento do
console.log("Removido no final: "+alunos); //removido final
console.log("Removido do Final: "+removidoFinal);

const removidoInicio = alunos.shift();
console.log("Removido no Inicio: "+alunos); //removido final
console.log("Removido do Inicio: "+removidoInicio);

//pode usar delete alunos[indice]
console.log(alunos.slice(3,5));

//saber se alunos é um array
console.log(alunos instanceof Array);