function greet () {
console.log(`Hello, ${this.name}`)
}

const Alice = {name: "Alice"}
greet.call(Alice)
