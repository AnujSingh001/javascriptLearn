class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username :- ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

let user = new User("Anuj")
//console.log(user.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.username = username
    }
}

const tech1= new Teacher("hitesh", "hitesh@gmail.com")
console.log(tech1)
console.log(tech1.createId());