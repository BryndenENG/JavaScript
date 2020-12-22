//ponto expõe atributos de funções e objetos 

console.log(Math.ceil(6.1)) //acessando um objeto da proria api

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)


function Obj(nome)
{
    this.nome = nome //this indica e torna visivel um abributo de uma função
    this.exec = function()
    {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') //instanciando uma função Obj
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()