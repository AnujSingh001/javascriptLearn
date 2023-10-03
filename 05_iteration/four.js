const myObject = {
    "js" : "javascript",
    "py" : "python",
    "java" : "java",
    "rb" : "ruby",
    "cpp" : "c++"
}

for (const key in myObject) {
   // console.log(myObject[key])
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}