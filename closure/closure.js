function outer() {
	let counter = 0;
	function inner () {
		counter++;
		console.log(counter);
	}
	return inner
}

fn = outer();
fn();
fn();
fn();
