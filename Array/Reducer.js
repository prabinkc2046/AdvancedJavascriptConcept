const numbers = [1, 2, 3, 4, 5];

// sum each item

const sum = numbers.reduce((sum, currentNumber) => {
    return currentNumber + sum
},0)

console.log(sum)

// Flattening an Array of Arrays
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattended = arrays.reduce((acc, currentValue) => {
    return acc.concat(currentValue)
}, [])

console.log(flattended);

// Grouping Objects by a Property
const data = [
    { id: 1, category: 'A', value: 10 },
    { id: 2, category: 'B', value: 20 },
    { id: 3, category: 'A', value: 15 },
    { id: 4, category: 'C', value: 25 }
];

const cat = data.reduce((acc, currentObject) => {
    const key = currentObject.category;
    currentObject.category
    currentObject.category
    if (!acc[key]){
        acc[key] = []
    } {
        acc[key].push(currentObject)
    }
    return acc;
}, {})

console.log(cat)

// Calculating Average from Array of Numbers
const grades = [85, 90, 92, 88, 95];
const avg = grades.reduce((sum, item) => {
    return sum + item
}, 0) / grades.length

console.log(avg)


// Building a Frequency Map with Initial Values
const gradeRange = [78, 85, 92, 88, 95, 85, 78, 82, 92, 85];

const gradeFreMap = gradeRange.reduce((freqMap, grade) => {
    if(!freqMap[grade]){
        freqMap[grade] = 1;
    } else {
        freqMap[grade]++
    }
    return freqMap
}, {})

console.log(gradeFreMap)

// Grouping Objects by a Property with Array Accumulation
const books = [
    { title: 'Book 1', genre: 'Fiction' },
    { title: 'Book 2', genre: 'Fantasy' },
    { title: 'Book 3', genre: 'Fiction' },
    { title: 'Book 4', genre: 'Science Fiction' },
    { title: 'Book 5', genre: 'Fantasy' }
];

const groupedBooks = books.reduce((groupedBooks, b) => {
    const key = b.genre;
    if(!groupedBooks[key]){
        groupedBooks[key] = []
    } else {
        groupedBooks[key].push(b)
    }
    return groupedBooks
}, {})

console.log(groupedBooks);

// Computing Summary Statistics from an Array of Numbers
const scores = [85, 92, 78, 88, 95, 82, 90, 87];
const statSummary = scores.reduce((stat, score, index, array) => {
    stat.sum += score;
    stat.count = array.length;
    if (score < stat.min || stat.min === undefined){
        stat.min = score
    }
    if (score > stat.max || stat.max === undefined){
        stat.max = score;
    }
    return stat
}, {sum: 0, count: 0, min: undefined, max: undefined})


statSummary.average = statSummary.sum / statSummary.count
console.log(statSummary)

// Flatten and Count Instances of Nested Elements
const studentGroups = [
    ['Alice', 'Bob', 'Alice'],
    ['Charlie', 'Alice', 'David'],
    ['Bob', 'Alice', 'Eve']
];

const studentRangeCount = studentGroups.reduce((range, item) => {
    item.forEach((value) => {
        if(!range[value]){
            range[value] = 1;
        } else {
            range[value]++
        }
    })
    return range
}, {})

console.log(studentRangeCount)
