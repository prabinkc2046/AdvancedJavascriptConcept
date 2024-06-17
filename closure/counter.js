function counter(){
	let count = 0;
	function inner () {
		return {
			increase: () => count++,
			decrease: () => count--,
			reset: () => count = 0,
			getCount: count,
		}
	}
	return inner;
}

const fn = counter();
console.log(fn());
fn.increase();
console.log(fn());
