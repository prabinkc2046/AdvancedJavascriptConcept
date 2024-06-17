// Challenge 1:
// Given an array of numbers, use Array.prototype.map() and Array.prototype.reduce() to compute the sum of squares of all even numbers in the array.

// [1, 2, 3, 4, 5, 6, 7, 8] original array
// [2, 4, 6, 8] filter
// [4, 16, 36, 64] map
// 34435 reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const sum = numbers.filter(n => n % 2 === 0)
.map(n => n * n)
.reduce((sum, n) => {
    return sum + n
}, 0)

console.log(sum)

// Transform an array of strings into an object where the keys are the strings themselves, and the values are their respective lengths. Use Array.prototype.map() and Array.prototype.reduce() to achieve this transformation.


const fruits = ['banana', 'apple', 'mango'];
const reducedFruits = fruits.reduce((fruit, item) => {
    
        fruit[item] = item.length;
   
    return fruit
}, {})

// console.log(reducedFruits)

// Challenge 3:
// Convert an array of objects containing product information (with name and price properties) into a single object where the keys are the product names and the values are the total prices for each product. Use Array.prototype.map() and Array.prototype.reduce().
// const products = [
//     {name: "mango", price: 2},
//     {name:'banana', price: 3},
//     {name: "milk", price: 1}
// ]

// const reducedProducts = products.reduce((acc, item) => {
//     acc[item.name] = item.price || 0
//     return acc
// }, {})

// console.log(reducedProducts);

// Challenge 4:
// Given an array of arrays, flatten the arrays and calculate the total number of elements. Use Array.prototype.map() and Array.prototype.reduce() for this task.


const myArray = [[1,2], ['mango','banana'], [{id: 1}], ['prabin']]

const count = myArray.reduce((acc, item) => {
    return acc.concat(item)
}, []).length

console.log(count)

// Challenge 5:
// Transform an array of objects representing students into an object where the keys are the student IDs and the values are objects containing their average scores across multiple exams. Use Array.prototype.map() and Array.prototype.reduce() for this transformation.

const students= [
    {id: 191731, name: 'Prabin', math: 90, physics: 70, geography: 78},
    {id: 191732, name: 'sam', physics: 70, geography: 78},
    {id: 191733, name:'hari', math: 90, physics: 70, geography: 78},
    {id: 191734, name: 'eden', math: 90, physics: 70, geography: 78},
    {id: 191735, name:'Jeana',math: 90, physics: 70, geography: 78},
    {id: 191736, name:'beth',math: 90, physics: 70, geography: 78}
]

const studentsReport = students.reduce((acc, student) => {
    const {id, name, math=0, physics=0, geography=0} = student;
    const avg = ((math + physics + geography)/3).toFixed(2)
    acc[id] = {name, avg}
    return acc
}, {})

console.log(studentsReport)

// Given an array of products, calculate the total price of all products and identify the product with the highest price.
const electronicProducts = [
    { id: 1, name: 'Laptop', price: 1 },
    { id: 2, name: 'Smartphone', price: 2 },
    { id: 3, name: 'Headphones', price: 3 }
  ];

  const estat = electronicProducts.reduce((stat, item, index) => {
    const {id, name, price} = item;
    stat.sum += price;
    stat.count = index + 1;
    if (stat.lowest === undefined || price < stat.lowest){
        stat.lowest = price;
        stat.lowestProduct = name;
    }
    if (stat.highest === undefined || price > stat.highest){
        stat.highest = price;
        stat.highestProduct = name;
    }
    return stat
  }, {sum: 0, lowest: undefined, highest: undefined, count: 0})

  estat.averagePrice = estat.sum / estat.count

  console.log(estat)

  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 150 },
    { id: 4, name: 'Chair', category: 'Furniture', price: 250 },
    { id: 5, name: 'Desk', category: 'Furniture', price: 400 }
  ];
  
  const groupedProducts = products.reduce((acc, product) => {
    // Check if the category exists in the accumulator
    if (!acc[product.category]) {
      acc[product.category] = {
        products: [],
        totalPrice: 0,
        count: 0,
        averagePrice: 0
      };
    }
  
    // Add the product to the category group
    acc[product.category].products.push(product);
    // Accumulate the total price for the category
    acc[product.category].totalPrice += product.price;
    // Increment the count of products in the category
    acc[product.category].count++;
  
    // Calculate the average price for the category
    acc[product.category].averagePrice = acc[product.category].totalPrice / acc[product.category].count;
  
    return acc;
  }, {});
  
  console.log(groupedProducts);
  