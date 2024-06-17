// filter method create new array for each item that pass the condition (true)
// posed by the call back function

const numbers = [10, 5, 20, 45, 33, 3, 67]

// array of items that are greater than 20

const greaterThan20 = numbers.filter( n => n > 20)

console.log(greaterThan20)


const words = ['apple', 'banana', 'grapefruit', 'orange', 'kiwi'];

const filteredWords = words.filter(w => {
    return w.length > 5
})

console.log(filteredWords)

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 },
    { name: 'Monitor', price: 300 }
];

// filter product with price less than or equal to 50

const filteredProducts = products.filter(
    p => {
        return p.price >= 50
    }
)

console.log(filteredProducts)

const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', pages: 176 },
    { title: 'Clean Code', author: 'Robert C. Martin', pages: 464 },
    { title: 'Design Patterns', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', pages: 395 },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas', pages: 352 }
];

// Filter books with more than 300 pages

const filteredBooks = books.filter(b => {
    return b.pages > 300
})

const items = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 20, inStock: false },
    { name: 'Keyboard', price: 50, inStock: true },
    { name: 'Monitor', price: 300, inStock: false }
];

// Filter products that are in stock and have a price less than or equal to 100

const filteredItems = items.filter(i => {
    return i.inStock && i.price <= 100 || i.name.startsWith("K")
})

