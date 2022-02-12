const fs = require('fs')

let argvArray = process.argv

fs.readFile(argvArray[2], 'utf8', (err, data)  => {
    if (err){
        console.error(err)
    }
    console.log(data.split('\n').length- 1)
})

