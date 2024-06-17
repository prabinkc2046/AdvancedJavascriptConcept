




function compose(user){
	return function(capitalizeName){
		return function(incrementAge){
			return function(addPrefix){
				return user;
			}
		}
	}
}


const capitalisedUser = compose({name: 'prabin k c', age: 34});

const capitalisedUser = capitalisedUser(() => {
	//access the name
	let name = user.name;
	//split the name into array of string separated by space
	arrayedName = name.split(" ");
	for (part of arrayedName){
	// check if the part is more than a letter
		if(part.lenght > 1){
			//access the first letter
			let f = part.substring(0,1);
			//to upper case
			fu = f.toUpperCase();
			//access the remaining string
			r = part.substring(1);
			//to lower case
			rl = r.toLowerCase();
			//combine and add it to name property
			user.name += fu + rl+ " "
		} else {
			user.name += part.toUpperCase() + " "
		}
	}
	return user;
})

const agedUser = capitalisedUser((amount) => {
	user.age += amount
	return user
})

const formatedUser = agedUser((prefix) => {
	user.name += prefix + " " + user.name
	return user;
})

