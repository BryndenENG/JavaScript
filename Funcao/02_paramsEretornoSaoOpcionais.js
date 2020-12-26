
//não é uma função prática na vida real, serve apenas para mostrar que uma função pode ou 
//não retornar um valor 
function area(largura, altura)
{
    const area = altura * largura
    if (area > 20)
    {
        console.group(`Valor acima do permitido ${area} m2`)
    }
    else 
    {
        return area 
    }
}

//console.log(area(2,3))
//console.log(area(2))
//console.log(area())
//console.log(area(2,3,4,5,7,8))
console.log(area(5,5))  //pode gerar comportamentos inesperados o uso de retornos diferentes 