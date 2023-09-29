const name = "Anuj"
const repoCount = "123456"

// console.log(name + repoCount)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Snake game")

console.log(gameName.charAt(0))
console.log(gameName.indexOf(' '))

const String1 = gameName.slice(0,3)
console.log(String1)

const string2 = "     Anuj budhwar.  "
console.log(string2.trim())

const url = "https://AnujBudhwar/teji%20budhwar"
console.log(url.replace("%20","_"))

console.log(url.includes("Anuj"))