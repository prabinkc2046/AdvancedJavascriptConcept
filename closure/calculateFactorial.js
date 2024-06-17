function calculateFactorial(){
	let factorials = {}
	function calculateFactorial(n){
		if (n in factorials){
			console.log("Serving from cache...")
			return factorials[n]
		} else {
			console.log("Calculating factorials")
			let factorial = 1;
			for (let i=1; i<=n; i++){
				factorial = factorial * i;
			}
			factorials[n] = factorial;
			return factorial;
		}
	}
	return calculateFactorial;
}





const factorialCalculator = calculateFactorial();

console.log(factorialCalculator(50))
console.log(factorialCalculator(50))
console.log(factorialCalculator(100))
console.log(factorialCalculator(100))
