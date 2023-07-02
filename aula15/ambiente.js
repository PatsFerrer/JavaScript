let num = [5, 8, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let posicao = num.indexOf(8)
if (posicao == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor está na posição ${posicao}`)
}
