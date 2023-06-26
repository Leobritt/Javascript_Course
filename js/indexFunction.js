function helloWorldFunction(nome) {
    return `Hello World! ${nome} is here!`;
}
//salvar oq a funcao retorna 
const result = helloWorldFunction("Leo");
console.log(result);

/*essa atribuição no parâmetro faz com que se n valor for passado no 
ele terá o valor atribuido no param*/
function sum(x = 0, y = 0) {
    return x + y;
}

const resultSum = sum(50, 50);
console.log(resultSum);

/*essa atribuição no parâmetro faz com que se n valor for passado no 
ele terá o valor atribuido no param*/
function pow(x = 0, y = 0) {
    return x ** y;
}

console.log(pow(40, 2));

//funcao anonima como uma var recebe uma funcao precisar botar o ;
const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(16));

/*arrow function 
pode ser declarada dessa forma se tiver 1 linha e 1 parametro

const areaCirculo = (r) => Math.PI * r *r;

*/

const areaCirculo = (r) =>{
   return Math.PI * r *r;
}
console.log(areaCirculo(5));