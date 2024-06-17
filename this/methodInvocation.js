const person = {
	name: "Alice",
	greet() {
		console.log(`Hi, my name is ${this.name}`)
	}
}

person.greet()
