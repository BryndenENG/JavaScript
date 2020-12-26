 //O contexto do this dentro de uma função arrow nunca é alterado 

 let comparaComThis = function(param){
     console.log(this === param)
 }

 //o escopo global do node chama global e o do navegador chama window
 comparaComThis(global)
 comparaComThis(this)//em outras palavras o this não é o this "estranho"

 const obj = {}

 comparaComThis = comparaComThis.bind(obj)
 comparaComThis(global)
 comparaComThis(obj)
 
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)//mantem a guarda n muda 
                                                   //arrow mantem o this
comparaComThisArrow(obj)

