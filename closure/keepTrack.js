function createFibonacciSeq() {
	let a = 0;
	let b = 1;
	function prevFibo () {
		z = a + b;3
		a = b;
		b = z;
		return `${a}, ${b}`
	}
	return prevFibo;

}

const previousFiboNumber = createFibonacciSeq();

console.log(previousFiboNumber());
console.log(previousFiboNumber());
console.log(previousFiboNumber());
console.log(previousFiboNumber());
console.log(previousFiboNumber());
console.log(previousFiboNumber());
console.log(previousFiboNumber());
