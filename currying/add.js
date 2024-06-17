function add(x, y, z){
	return x + y + z
}

//currying

function curriedAdd(x){
	return  function(y){
		return function(z){
			return x + y + z
		}
	}
}

const add1 = curriedAdd(1)
//add1 stores the returned function with closure x = 1
const add1And2 = add1(2);
// creates another closure y = 2

const result = add1And2(3);
//finally execute the inner most function which has still access
//to the variable defined in the outer function

console.log(result);
