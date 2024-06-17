function createPassword(){
	let passwords = {};
	function passwordCreator () {
		return {
			set: (user) => {
				//check prvided user has the property name and password
				if (!user.hasOwnProperty("name") || !user.hasOwnProperty("password")){
					return `Provide the argument correctly`
				}

				//check that user name does not exists already
				const {name, password} = user;
				if(name in passwords){
					return `username ${name} already exists.`
				}

				//create new user and password
				passwords[name] = password;
				return `Password is created`
			},
			check: (user) => {
				//check prvided user has the property name and password
            	if (!user.hasOwnProperty("name") || !user.hasOwnProperty("password")){
            		return `Provide the argument correctly`
            	}

				const {name, password} = user;
            	if (name in passwords){
					//match password
					const storedPassword = passwords[name];

					if (storedPassword === password){
						return true;
					} else {
						return false;
					}
            	} else {
					return `${name} is not registered`
            	}

			},
		}
	}
	return passwordCreator; 
}
 


const myPassword = createPassword();

const password = myPassword();

console.log(password.set({name: "prabin", password: "prabinkc"})); // set password for user name prabin
console.log(password.check({name: "prabin", password: "prabinkc"})); // match the password value for user prabin if it exists
console.log(password.check({name: "prabin", password: "prabink"})); // match the password value for user prabin if it exists
console.log(password.check({name: "random", password: "prabinkc"})); // match the password value for user prabin if it exists
console.log(password.set({name: "prabin", password: "prabinkc"})); // match the password value for user prabin if it exists
