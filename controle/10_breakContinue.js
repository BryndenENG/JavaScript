//Deve ser evitado quando possivel o uso de break e continue 

const nums = [ 1, 2, 3, 4, 5, 6, 7, 9, 10]

//o break atuará no laço for, while ou do while mais proximo
//break interrompe o laço
for(x in nums)
{
    if (x == 5) break
    console.log(`x = ${nums[x]}`)
}

//continue: pula o ciclo do laço atual e atua no for, while ou do while mais proximo  
for(x in nums)
{
    if (x == 5) continue 
    console.log(`x = ${nums[x]}`)
}