"use strict";

var alunos = [{
  nome: 'Bento',
  nota: 8
}, {
  nome: 'Nick',
  nota: 10
}, {
  nome: 'Bonnie',
  nota: 9
}, {
  nome: 'Xuxa',
  nota: 7
}, {
  nome: 'Cherry',
  nota: 6
}];

// Adicionando um novo aluno com nota 
alunos.push({
  nome: 'Lili',
  nota: 4
});
var alunosComNotaMaiorQueSeis = alunos.filter(function (item) {
  return item.nota > 6;
});
console.log(alunosComNotaMaiorQueSeis);