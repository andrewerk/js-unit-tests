const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // Utilizei este link como referência: https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array/12997110
    expect(productDetails('param1', 'param2') instanceof Array).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('param1', 'param2').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('param1', 'param2')[0]).toBe('object');
    expect(typeof productDetails('param1', 'param2')[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('param1','param2')[0]).not.toEqual(productDetails('param1','param2')[1]);
    // Teste se os dois productIds terminam com 123.
    let productIdOne = productDetails('param1','param2')[0].details.productId;
    let productIdTwo = productDetails('param1','param2')[1].details.productId;
    expect(productIdOne[productIdOne.length-1]).toBe('3');
    expect(productIdOne[productIdOne.length-2]).toBe('2');
    expect(productIdOne[productIdOne.length-3]).toBe('1');
    expect(productIdTwo[productIdTwo.length-1]).toBe('3');
    expect(productIdTwo[productIdTwo.length-2]).toBe('2');
    expect(productIdTwo[productIdTwo.length-3]).toBe('1');
  });
});
