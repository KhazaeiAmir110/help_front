let users = [
    {id:1, name:'amir', age: 19},
    {id:2, name:'ali', age: 15},
    {id:3, name:'askhar', age: 16},
    {id:4, name:'ahmad', age: 16},
    {id:5, name:'asman', age: 18}
]

users.some(function(user) {
    alert(user.name)

    alert(user.name=="amir")
    alert(user.id==1)
})