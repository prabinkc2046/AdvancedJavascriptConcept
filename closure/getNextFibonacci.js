function givefibo() {
	let fibo = [0,1,1];
	function fiboNumber () {
		return {
			sequence: fibo.toString(),
			next: () => {
			return ((parseInt(sequence.charAt(sequence.length -1)) + parseInt(sequence.charAt(sequence.length -2))))},
		}
	}
	return fiboNumber;
}

const nextFiboNumberGenerator = givefibo();
console.log(nextFiboNumberGenerator());
const nextFibo = nextFiboNumberGenerator();
console.log(nextFibo.next);
