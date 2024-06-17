const lists = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: false, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


cat = [];
//initiate a variable categories

//loop through existig array and  look for each category and create a 
//property with that category as key and value to be array containing all that item


lists.forEach((item) => {
	if(item.category in cat){
		cat[item.category].push(item);
	} else {
		cat[item.category] = [];
	}
})

console.log(cat)



