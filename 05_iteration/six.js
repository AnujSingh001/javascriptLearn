let coading = ["java", "python", "javascript","ruby", "golang", "typescript"]

// let values = coading.forEach( (items)=>{
//     //console.log(items)
//     return items
// } ) //for each loop kuch bhi return nhi krta hai

// console.log(values) //here we get console.log values but return nothing so in the output we get undefined aas return and print all values


let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums=myNums.filter( (num) => num>4 )//in implicit function not need to use return keyword
//let newNums2=myNums.filter( (num) => {return num>4 }) if we use parentheses then we have to use return keyword 

//console.log(newNums,newNums2)

let newNums3 = []
myNums.forEach( (item) => {
    if (item>4){
        newNums3.push(item)
    }
})
console.log(newNums3)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

