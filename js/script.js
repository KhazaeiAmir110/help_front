let firsname = 'Ali'
// console.log(this)

const user = {
    firstname : 'John',
    lastname : 'Doe',
    test : () => {
        console.log(this.firsname)
    }
}