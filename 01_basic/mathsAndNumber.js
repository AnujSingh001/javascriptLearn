const score = 500
const account = new Number(900)

console.log(account)
console.log(score)

console.log(account.toFixed(2))
console.log(account.toString())

let number = 123.678430
console.log(number.toPrecision(4))

let number2= 1000000000
console.log(number2.toLocaleString("en-IN"))//Use en-IN to put coma according to the indian number system

// +++++++++++++++++++++++++MATHS++++++++++++++++++++++++
console.log(Math)
console.log(Math.ceil(8.7))
console.log(Math.floor(8.7))
console.log(Math.round(4.3))
console.log(Math.min((2,4,1,6,8)))
console.log(Math.max((4,4,7,32,8)))
console.log(Math.abs(-87))
console.log(Math.random())

// **************************important formula ****************************

let min = 10
let max = 30

let randomNumberBetween10And30 = Math.floor(Math.random()*(max-min +1 ) + min)
console.log(randomNumberBetween10And30)
