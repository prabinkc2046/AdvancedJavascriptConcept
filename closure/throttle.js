

function createThrottle(timeout) {
	let startTime = 0;
	let interval = 0;
	function executeThisFunction (func) {
		startTime = Date.now();
		interval = Date.now() - startTime;
		if (interval < timeout){
			setTimeout(() => {
				func();
				startTime = 0;
				interval = 0
			}, timeout);
		}
	}
	return executeThisFunction;
}





const myfn = createThrottle(1000) // throttle for 200 ms

console.log(myfn(() => console.log("click 1"))); // takes function like click
console.log(myfn(() => console.log("click 1"))); // takes function like click
