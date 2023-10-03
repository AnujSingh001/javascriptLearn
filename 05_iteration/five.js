let coading = ["java", "python", "ruby", "cpp", "golang"]

// coading.forEach( function (item){console.log(item)})

// coading.forEach((item)=>{console.log(item)})

// function printme(item){
//     connsole.log(item)
// }

//coading.forEach(printme) //only refrence dena hai pura nhi pass krna (like:- printme())

// coading.forEach((item, index, arr)=>{console.log(item, index, arr)})

const mycoading=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
    {
        languageName:"python",
        languageFile:"py"
    }
]

mycoading.forEach( (item)=>{console.log(item.languageName)})