//Um objeto é uma função
console.log(typeof Object)

//Quando se instancia um novo objeto, ou até mesmo uma nova função ou um objeto atraves de uma 
//classe, serão objetos
const Cliente = function() {}

class Produto {}

//É possivel ter uma instancia de uma função que nesse caso será um objeto de uma função
//Classe nada mais é do que uma função 

console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Cliente)
console.log(typeof new Object)