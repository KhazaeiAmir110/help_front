// work with age

let info = {
    name : 'mahdi',
    birth: 2002,
}

// getData
let time = new Date()
let year = time.getFullYear()

let age = year - info.birth

console.log(age)
