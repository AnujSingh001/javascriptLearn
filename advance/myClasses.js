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