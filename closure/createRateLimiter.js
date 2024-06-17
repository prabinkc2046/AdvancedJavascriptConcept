



function createLimit() {
	let limit = 5;
	let call=0;
	let interval = 0; //need to add interval on every call 
	let lastCallTime = 0;
	function limitExecution (func) {
		//call the function
		if (call < limit && interval < 60){
			func();
			call++
			lastCallTime = Math.floor((Date.now()/1000));
			interval = Math.floor((Date.now()/1000)) - lastCallTime;

		}  else {
			return `Skipping function call.`
		}
	}
	return limitExecution;
}

const limiter = createLimit();
console.log(limiter(() => console.log("hello world"))); // fist time calling and can call for only 5 times since first call
console.log(limiter(() => console.log("hello world"))); // fist time calling and can call for only 5 times since first call
console.log(limiter(() => console.log("hello world"))); // fist time calling and can call for only 5 times since first call
console.log(limiter(() => console.log("hello world"))); // fist time calling and can call for only 5 times since first call
console.log(limiter(() => console.log("hello world"))); // fist time calling and can call for only 5 times since first call
console.log(limiter(() => console.log("hello world"))); // fist time calling and can call for only 5 times since first call

