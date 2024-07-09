// 1) ARRAY DE OBJETOS - ORDENS DA BOLSA DE VALORES

let ordens = [
    {cliente: "Roberto", tipo: "compra", quantidade: 56, ativo: "NFLX34"},
    {cliente: "Ricardo", tipo: "compra", quantidade: 76, ativo: "AAPL34"},
    {cliente: "Raphael", tipo: "venda", quantidade: 21, ativo: "GOGL34"},
]

let quantidadeDeOrdens = 0

// 2) SOMANDO TODAS QUANTIDADES DE ORDENS USANDO LOOP "FOR"

for (let i = 0; i < ordens.length; i++) {
    quantidadeDeOrdens += ordens[i].quantidade;
}

console.log(quantidadeDeOrdens);

// 3) USANDO MÉTODO DE ARRAYS "REDUCE" - REDUZ O ARRAY A UM ÚNICO VALOR

let quantidadeDeOrdensReduce = ordens.reduce(function(somaOrdens, ordens){
    console.log("Ordem",somaOrdens, ordens);
    return somaOrdens + ordens.quantidade;
}, 0)

console.log(quantidadeDeOrdensReduce);

// 4) SIMPLIFICANDO COM ARROW FUNCTIONS - SHORT HAND

let qtdOrdensClean = ordens.reduce((somarOrdens, ordem) => somarOrdens + ordem.quantidade, 0);

console.log(qtdOrdensClean);
