const filterModule = require('./mymodule.js')
const argvArray = process.argv
const dir = argvArray[2]
const ext = argvArray[3]

// console.log(filterModule)
filterModule(dir,ext,(err,list)=>{
    if (err){
        console.error(err)
    }
    list.forEach(file => console.log(file))
})

// console.log(err)