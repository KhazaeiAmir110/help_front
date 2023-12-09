// Object Oriented

class Users {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    showAge(){
        let data = new Date();
        let year = data.getFullYear();
        let result = year - this.age;
        console.log(result);
    }
}

let user_1 = new Users('amir',21,123)

console.log(user_1.age)
user_1.showAge()