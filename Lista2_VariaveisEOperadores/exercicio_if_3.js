/* Para doar sangue é necessário ter entre 18 e 69 anos.
Pessoas com idade entre 60 e 69 anos, só podem doar sangue
se não for a sua primeira doação.Escreva um Algoritmo que leia
via teclado o nome do doador(string), a idade(número inteiro)
do doador e se já fez outras doações de sangue(boolean).
Conforme as Regras para a doação de sangue citadas acima,
mostre na tela se o doador está Apto ou Não Apto para doar sangue. */

const leia = require('readline-sync');

let nomeDoador, idade;

nomeDoador = leia.question('+--------------- Digite o nome do doador: -------------+')
console.log('                                                 ');
idade = leia.questionInt('+--------------- Digite a idade do doador: -------------+')
console.log('                                                 ');
primeiraDoacao = leia.keyInYN('+--------------- Primeira doacao? (Digite Y ou N) -------------+')
console.log(primeiraDoacao)

if (idade >= 18 && idade <= 69) {
  if (idade >= 60 && primeiraDoacao) {
    console.log(`${nomeDoador} não está apto(a) para doar sangue!`)
  } else if (idade >= 60 && !primeiraDoacao) {
    console.log(`${nomeDoador} está apto(a) para doar sangue!`)
  } else {
    console.log(`${nomeDoador} está apto(a) para doar sangue!`)
  }
} else {
  console.log(`${nomeDoador} não está apto(a) para doar sangue!`)
}