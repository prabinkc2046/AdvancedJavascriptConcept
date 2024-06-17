function createGreeting(greeting){
	return function(name){
		return function(punctuation){
			const greet = `${greeting}, ${name} ${punctuation}`
			return greet;
		}
	}
}

