
const fs = require('fs')
const path = require('path')

let argvArray = process.argv

fs.readdir(argvArray[2], (err, fileList) => {
    
    let ext = path.extname(`${argvArray[2]}.${argvArray[3]}`) 
    if (err){
        console.error(err)
    }
    fileList.forEach(file => {
        if (file.endsWith(ext)){
            console.log(file)
        }
    })
    
})