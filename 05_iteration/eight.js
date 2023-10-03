let myNums = [1, 2, 3, 4, 5]

// let val = myNums.reduce(function (acc, num ){
//     return acc+ num
// },0)//this 0 is actually intial value of acc we cann change it according to need 

let val = myNums.reduce( (acc, num) => {return acc+ num},0)
console.log(val)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(totalPrice)