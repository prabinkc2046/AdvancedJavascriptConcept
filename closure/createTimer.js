function createTimer () {
	const startTime = Date.now();
	function elapse() {
		const current = Date.now();
		return Math.floor((current - startTime)/1000)
	}
	return elapse;
}

const diff = createTimer()


console.log(diff());

setTimeout(() => {
console.log(diff());
},3000);

setTimeout(() => {
console.log(diff());
}, 3000);
