const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  // test('atende', () => {
  //   const answered = true;
  //   return answerPhone(answered).then((answer) => {
  //     expect(answer).toBe('Oi!');
  //   });
  // });

  test('atende', () => {
    const answered = true;
    return expect(answerPhone(answered)).resolves.toBe('Oi!');
  });

  test('ocupado', () => {
    const answered = false;
    return expect(answerPhone(answered)).rejects
      .toStrictEqual((new Error('Infelizmente não podemos atender...')));
  });
});
