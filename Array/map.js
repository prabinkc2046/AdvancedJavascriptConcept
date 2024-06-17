const numbers = [1, 2, 3, 4, 5];

// Map numbers to their doubles

const dubbled = numbers.map(n => n * 2)

console.log(dubbled)

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 20 },
    { id: 3, name: 'Keyboard', price: 50 },
    { id: 4, name: 'Monitor', price: 300 }
];

// Map products to include a formatted price string

const formattedProducts = products.map(p => {
    let vatPercent = 1.25;
    return {
        ...p,
        formattedPrice: `$${vatPercent * p.price}`
    }
})

console.log(formattedProducts)


const employees = [
    { id: 1, name: 'Alice', department: 'HR', salary: 50000 },
    { id: 2, name: 'Bob', department: 'Engineering', salary: 80000 },
    { id: 3, name: 'Charlie', department: 'Marketing', salary: 60000}
];

// Map employees to include a bonus property based on department
const updatedEmployees = employees.map(e => {
    let bonusPer;
    switch(e.department){
        case 'HR':
            bonusPer = 0.1;
            break;
        case 'Engineering':
            bonusPer = 0.2;
            break;
        default:
            bonusPer = 0.05
    }
    return {
        ...e,
        bonus: e.salary * bonusPer
    }
})

console.log(updatedEmployees)