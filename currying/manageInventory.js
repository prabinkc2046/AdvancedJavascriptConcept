
const inventory = [
    { id: 1, type: "shirt", price: 20 },
    { id: 2, type: "pants", price: 40 },
    { id: 3, type: "hat", price: 15 },
    { id: 4, type: "shirt", price: 25 }
];

function manageInventory(property){
	return  function(value){
		return function(callback){
			const filtered = inventory.filter(item => item[property] === value)
			return filtered.map(callback);
		}
	}
}

