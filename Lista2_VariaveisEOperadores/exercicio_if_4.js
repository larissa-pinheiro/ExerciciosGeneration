/* Escreva um algoritmo que leia 3 palavras(string),
que definem as características de um tipo de animal,
que deve ser lido da esquerda para a direita. */

const readline = require('readline-sync');

const tiposDeEsqueleto = ['vertebrado', 'invertebrado'];
const classesDeAnimais = {
  vertebrado: ['ave', 'mamifero'],
  invertebrado: ['inseto', 'anelideo']
};
const tiposDeAlimentacao = {
  ave: ['carnivoro', 'onivoro'],
  mamifero: ['onivoro', 'herbivoro'],
  inseto: ['hematofago', 'herbivoro'],
  anelideo: ['hematofago', 'onivoro']
};

let tipo;
while (true) {
  tipo = readline.question(`Digite o tipo de esqueleto(${tiposDeEsqueleto.join(', ')}): `).toLowerCase();
  if (tiposDeEsqueleto.includes(tipo)) break;
  console.log('Tipo inválido. Tente novamente.');
}

let classe;
const classesValidas = classesDeAnimais[tipo];
while (true) {
  classe = readline.question(`Digite a classe(${classesValidas.join(', ')}): `).toLowerCase();
  if (classesValidas.includes(classe)) break;
  console.log('Classe inválida para esse tipo. Tente novamente.');
}

let alimentacao;
const alimentacoesValidas = tiposDeAlimentacao[classe];
while (true) {
  alimentacao = readline.question(`Digite a alimentacao(${alimentacoesValidas.join(', ')}): `).toLowerCase();
  if (alimentacoesValidas.includes(alimentacao)) break;
  console.log('Alimentação inválida para essa classe. Tente novamente.');
}

let animal;
if (tipo === 'vertebrado') {
  if (classe === 'ave') {
    if (alimentacao === 'carnivoro') {
      animal = 'Águia';
    }
    else if (alimentacao === 'onivoro') {
      animal = 'Pomba';
    }
  }
  else if (classe === 'mamifero') {
    if (alimentacao === 'onivoro') {
      animal = 'Homem';
    }
    else if (alimentacao === 'herbivoro') {
      animal = 'Vaca';
    }
  }
} else if (tipo === 'invertebrado') {
  if (classe === 'inseto') {
    if (alimentacao === 'hematofago') {
      animal = 'Pulga';
    }
    else if (alimentacao === 'herbivoro') {
      animal = 'Lagarta';
    }
  }
  else if (classe === 'anelideo') {
    if (alimentacao === 'hematofago') {
      animal = 'Sanguessuga';
    }
    else if (alimentacao === 'onivoro') {
      animal = 'Minhoca';
    }
  }
}

console.log(animal);