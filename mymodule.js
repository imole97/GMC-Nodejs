const fs = require('fs')
const path = require('path')

module.exports = (dir, filterExt, callback) => {
    let ext = path.extname(`${dir}.${filterExt}`)
    fs.readdir(dir, (err, data)=>{
        if (err){
            return callback(err)
        }
        fileList = data.filter(file => {
            if (file.endsWith(ext))
            return file
        } )
        callback(null, fileList)
    })
} 

