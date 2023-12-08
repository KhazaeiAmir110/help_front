let mySet = new Set([4,32,2,1]);

mySet.add(3)
mySet.add(1)
mySet.add(1)
// size mySet = 5
mySet.delete(3)

console.log(mySet) // {4,32,2,1}
console.log(mySet.size) // 4
console.log(mySet.has(1)) // true

mySet.clear() // clear
console.log(mySet) 