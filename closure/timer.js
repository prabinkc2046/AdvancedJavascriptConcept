function createTimer () {
	let startTime = 0;

	function Timer() {
		return {
			start: () => {
				startTime = Date.now();
				return `Timer started at ${startTime}`
			},
			stop: () => {
				let current = Date.now();
				let timeElapsed = Math.floor((current - startTime)/ 1000);
				return `Time Elapsed since Started: ${timeElapsed}`
			},
			reset: () => {
				startTime = 0;
				return `Timer is set to ${startTime}`
			},
		}
	}
	return Timer;
}

const Timer1 = createTimer();

const Timer2 = Timer1();

console.log(Timer2.start());

setTimeout(() => {
	console.log(Timer2.stop());
}, 3000);


