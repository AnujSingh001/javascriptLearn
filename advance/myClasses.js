class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}qwerty`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Anuj", "abc@gmail.com", "qwwertyu")

console.log(chai)
console.log(chai.encryptPassword())
console.log(chai.changeUserName())

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());