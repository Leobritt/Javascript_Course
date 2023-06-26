const num = Number(window.prompt("digite um numero:"));
//var para guarda na memoria o num digitado do prompt converter para number

/*var para armazenar o id do html para dps printar*/
const numTitulo = window.document.getElementById("numero-titulo");
const numTexto = window.document.getElementById("texto-raiz");
const numInteiro = window.document.getElementById("texto-inteiro");
const numNan = window.document.getElementById("texto-nan");
const numArrePcima = window.document.getElementById("texto-arredondado-p-cima");
const numArrePbaixo = window.document.getElementById("texto-arredondado-p-baixo");
const numCasasDecimais = window.document.getElementById("texto-duas-casas-decimais");

/*contas*/
let numSqrt = num ** 0.5;
let resposta = num.In

numTitulo.innerHTML = num;
numTexto.innerHTML = `A raiz quadrado do seu número é ${numSqrt.toFixed(2)}`;
numInteiro.innerHTML = `O seu número é inteiro ? ${Number.isInteger(num)}`;
numNan.innerHTML = `O seu número é Nan(Not a Number) ? ${Number.isNaN(num)}` //Not a Number;
numArrePcima.innerHTML =`Arredondado para cima ${Math.ceil(num)}`;
numArrePbaixo.innerHTML =`Arredondado para baixo ${Math.floor(num)}`;
numCasasDecimais.innerHTML = `Número com duas casas decimais ${num.toFixed(2)}`;






