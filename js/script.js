let mymap = new Map()

mymap.set('name' , 'ali')
mymap.set('type' , 'man')
mymap.set('age' , 25)

console.log(mymap)

console.log(mymap.get('name')) // ali

console.log(mymap.has('type')) // type

mymap.delete('type')
console.log(mymap)

mymap.clear() // clear
console.log(mymap) // size = 0