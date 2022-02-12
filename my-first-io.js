const fs = require('fs')

let argvArray = process.argv

let read = fs.readFileSync(argvArray[2])
let numOfLine = read.toString().split('\n')

let sumOfLine = 0
for (i=1; i < numOfLine.length; i++){
    sumOfLine += 1
}
console.log(sumOfLine)