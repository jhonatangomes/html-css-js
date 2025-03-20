let num = [5, 6, 3, 8]
num.push(1)
num.sort()

console.log(num)
console.log(`Nosso vetor é ${num}`)
console.log(`Você tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor encontrado está na posição ${pos}`)
}