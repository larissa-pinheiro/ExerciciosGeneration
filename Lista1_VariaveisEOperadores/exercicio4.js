/* Leia quatro valores (n1, n2, n3, n4).
A seguir, calcule e mostre a diferença do produto
entre o n1 e n2 pelo produto entre o n3 e o n4. */

const leia = require("readline-sync");
let n1, n2, n3, n4, diferenca;

n1 = leia.questionInt(`Informe o primeiro numero: `)
n2 = leia.questionInt(`Informe o segundo numero: `)
n3 = leia.questionInt(`Informe o terceiro numero: `)
n4 = leia.questionInt(`Informe o quarto numero: `)

diferenca = (n1 * n2) - (n3 * n4);

console.log(`Diferença: ${diferenca}`)