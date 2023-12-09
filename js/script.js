class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }
}

let person = new Person('amir',22)
person.setName = 'ali'
console.log(person.getName)