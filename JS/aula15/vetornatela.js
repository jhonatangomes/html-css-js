let valores = [5, 6, 3, 8, 1]

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/


//segunda forma de fazer
/*for (let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


//Terceira forma de fazer
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}