const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task is complete")
        resolve()
    },1000)
})

promise.then(()=>{
    console.log("promise conumed")
})

new Promise((resolve, reject)=>{
    setTimeout(() =>{
        console.log("Async task 2")
        resolve()
    },1000)
}).then(() =>{
    console.log("promise 2 consumed")
})

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve({username: "Anuj", email:"anujbudhwar@gmail.com"})
    },1000)
})

promise3.then((user)=>{
    console.log(user)
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username: "Anuj", email:"anujbudhwar@gmail.com"})
        }else{
            reject("Error : Something went wrong")
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "Anuj", email:"anujbudhwar@gmail.com"})
        }else{
            reject("Error : Js went wrong")
        }
    },1000)
})


async function consumePromiseFive(){
    
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

//  async function getAllUsers(){

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         console.log(response)
//         const data =await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error: ")
//     }
     
//  }

// getAllUsers()

// create getAllusers functionality with then and catch

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})