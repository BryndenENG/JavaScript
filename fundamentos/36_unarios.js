let num1 = 1

let num2 = 2

//pos fixado 
num1++
console.log(num1)


//pré fixado (tem mais precedência que o pós fixado)
--num1
console.log(num2)

//teste: verdadeiro ou falso?
console.log(++num1 === num2--) //resposta verdadeiro
                              //++num1 foi executado antes da comparação e num2-- foi executado depois da comparação

//Sempre deixe o código o mais simples possivel 
//Códigos limpos e com poucos comentarios, a ideia é o código não necessitar de tanto comentario 