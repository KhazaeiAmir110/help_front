let mypromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('test promise')
    }, 3000)
})

mypromise.then((value)=>{
    console.log(value)
},()=>{
    console.log('Error Promise')
})