// console.log(process.argv)
const array = process.argv
let sum = 0
for (i=2; i<array.length; i++){
    sum += Number(array[i])

}
console.log(sum)