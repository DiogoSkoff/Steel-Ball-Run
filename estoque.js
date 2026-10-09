//Questão 1.1

const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];

console.log(categorias.join(', ')); 

//Questão 1.2

const codigosProdutos= ['101', '102', '103', '104'];

console.log(codigosProdutos.join(', ')); 

const fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');

console.log(fornecedores.join(', '));

//Questão 1.3


console.log("Primeiro elemento:", categorias[0]); 

categorias[1] = 'Calçados';

console.log("Array atualizado:", categorias.join(', '));


//Questão 2.1


categorias.push('Livros');

categorias.pop();

categorias.unshift('Brinquedos');

categorias.shift();

console.log("Array atualizado:", categorias.join(', '));

//Questão 2.2

console.log(categorias.length); 

//Questão 2.3

const jorge = categorias.indexOf('Calçados');
console.log(jorge);

const jao = categorias.includes('Eletrônicos');
console.log(jao);

//Questão 3.1

for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}

const produtos = [
{ nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
{ nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
{ nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

console.log(produtos[0]);

let produtosBaratos = produtos.filter (produto => produto.preco < 300.00);
console.log(produtosBaratos);

let damn = [50, 150, 200, 350, 400];
let sla =  damn.filter (numero => numero % 100 === 0);
console.log(sla);

let quantidades = [2, 3, 5, 10];
let total = quantidades.reduce((acumula, quantidade) => acumula + quantidade, 0);
console.log(total);

let valorTotal = produtos.reduce((acumulador, produto) => {
return acumulador + (produto.preco * produto.estoque);
}, 0);

console.log(valorTotal);

let valores = [100, 200, 300]

valores = valores.map(valor => valor * 0.9);
console.log(valores);

let nomesProdutos = produtos.map(produto => produto.nome);
console.log(nomesProdutos);

let copia = produtos.slice();
copia.sort((a,b) => a.preco b.preco);


let inventario = []
