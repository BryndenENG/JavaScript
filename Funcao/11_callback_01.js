//Funções callback são funções que são dadas como parametro para uma primeira função e em determinado momento ela é chamada uma ou mais vezes

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice)
{
    console.log(`${indice +1}. ${nome}`)
}

//a função forEach() é uma função que pertence ao tipo array que tem por função varrer um array 
fabricantes.forEach(imprimir)

//o parametro fabricante será cada elemento do array
fabricantes.forEach(function(fabricante){console.log(fabricante)})

fabricantes.forEach(fabricante => console.log(fabricante))


