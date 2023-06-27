//obj Pessoa com atributos
const pessoa1 ={
    nome: "Leonardo",
    sobrenome: "Britto",
    idade: 22,

    //método dentro do obj e usando o this p referenciar 
    cursoFaculdade(){
        console.log(`${this.nome} ${this.sobrenome} estuda eng. Software e tem ${this.idade} anos`);
    },

    addIdade(){
        this.idade++;
    }
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//chamando o método dentro do obj pessoa1
pessoa1.cursoFaculdade();
pessoa1.addIdade();
pessoa1.cursoFaculdade();


function pessoaCreate(nome,sobrenome,idade){
   const pessoa ={
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
    return pessoa
}

/*outra forma*/
function pessoaCreate2(nome,sobrenome,idade){
    return {
        nome,
        sobrenome,
        idade
    };
    
}

const p1 = pessoaCreate("Beatriz","Calazans",22);
const p2 = pessoaCreate("Jorge","Miranda",50);
const p3 = pessoaCreate("Amanda","Farmer",23);

const p4 = pessoaCreate2("Roberto", "Carlos",80);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
