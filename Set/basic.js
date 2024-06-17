const { log } = require("console")

// removing the duplicates from array
const array = [1, 2, 3, 3, 3, 4, 4, 4, 5,5,5]

const uniqueArray = [...new Set(array)]

console.log(uniqueArray)

const people = [
    "prabin",
    "prabin",
    "Prabin",
    "Sital"
]

const uniquePeople = [...new Set(people)];

console.log(uniquePeople);


const categories = [
    'fresh produce',
    "bakey",
    "poulty",
    "meat",
    "meat",
    "bakey",
    "fresh produce"
]

const uniqueCategories = new Set(categories);


console.log(uniqueCategories.has('bakey'))


const nums = [1,2,3,3,4,4,4,6,6,6]

const uniqueNums = new Set(nums)

uniqueNums.forEach(num => {
    console.log(num)
})

for (let num of uniqueNums){
    console.log("number", num)
}


const obj1 = {id: 1}
const obj2 = {id: 1}
const obj3 = {id: 2}

const uniqueObjectSet = new Set();
uniqueObjectSet.add(obj1)
uniqueObjectSet.add(obj2)
uniqueObjectSet.add(obj3)

console.log(uniqueObjectSet.size)