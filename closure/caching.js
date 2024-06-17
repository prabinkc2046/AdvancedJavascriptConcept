
function createCache() {
	const cache = {};
	function add(x, y) {
		let key1 = `${x},${y}`
		let key2 = `${y},${x}`
		if (key1 in cache || key2 in cache){
			console.log("serving from cache...");
			return cache[key1] || cache[key2]
		} else {
			console.log("calculating...");
			let sum = x + y;
			cache[key1] = sum;
			cache[key2] = sum;
			return sum;
		}
	}
	return add;
}

const cachedSum = createCache();
console.log(cachedSum(1,2));

