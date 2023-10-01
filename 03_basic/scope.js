let b = 340

if(true){
    const a = 10
    let b = 20
    var c = 30
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const usrename = "Anuj"
    function two(){
        const website = "Golu"
        console.log(usrename)

    }
    //console.log(website)
    two()
}

//one()

if(true){
    const username = "Anuj"
    if(username === "Anuj"){
        const website = "Youtube"
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)

console.log(addone(9))

function addone(num){
    return num+1
}


console.log(addtwo(9))

const addtwo = function(num){     //this type of function declaration is called expression
    return num + 2
}

//console.log(addone(9))
//console.log(addtwo(9))