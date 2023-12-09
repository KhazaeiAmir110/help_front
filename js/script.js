// redusee

myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const reducer = (accumulator, currentValue) => accumulator + currentValue

const ressult = myarray.reduce(reducer)

console.log(ressult)