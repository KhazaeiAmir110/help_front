class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    birthDate(){
        let date = new Date()
        let year = date.getFullYear()
        let result = year - this.age
        console.log(result)
    }
}

class Student extends Person{
    constructor(name,age,gender){
        super(name,age)
        this.gender = gender;
    }
}

let studeent_1= new Student('amir', 12, 'man')
console.log(studeent_1)