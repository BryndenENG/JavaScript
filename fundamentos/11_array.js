 
//Criação de array inicia com abre e fecha chaves com os valores separados entre virgula 
 const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])

//ao inserir um indice que não existe no array será devolvido o valor undefined 
console.log(valores[100])

//é possivel adicionar um novo valor simplesmente informando o indice e colocando o valor 
valores[4] = 10
console.log(valores)

//se for colocado um indice muito distante do ultimo o JS acusará que existe valores em branco em um trecho 
valores[15] = 9
console.log(valores)

//verificar o tamanho de um array 
console.log(valores.length) //contara 16 pois tem valores no meio dele que esta vazio entretanto o JS já alocou o espaço  na memoria 

//adicionar valores em um array com auxilio do metodo push podendo inserir mais de um valor 
const valores2 = [1 , 2, 3, 4, 5, 6]
valores2.push(10)
console.log(valores2)

//devido a ser fracamente tipada o array do JS aceita ter varios tipos diferentes de dados em cada um de seus indices
valores2.push('amendoin', valores,2)
console.log(valores2)
//é recomendado não misturar tipos de dados mesmo que seja possivel 

//retira o ultimo valor de um array
valores2.pop()
console.log(valores2)

//retirar um ekemento com base em um indice 
console.log(valores2)
delete valores2[1]
console.log(valores2)

//eM js ARRAY É DO TIPO OBJECT