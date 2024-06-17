function Counter() {
	//this = {}
	this.counter = 0;
	this.increment = function(){
		this.counter += 1
	}
	this.decrement = function () {
		this.counter -= 1
	}
	this.reset = function(){
		this.counter = 0
	}
	this.getCount = function (){
		return this.counter
	}
}
