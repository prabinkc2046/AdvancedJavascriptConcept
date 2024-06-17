const useCases = [
    {id: 1, use:'Conversation', isChecked: true, products:[1,9]},
    {id: 2, use:'Parenting', isChecked: true, products:[1,10]},
    {id: 3, use:'Sleep', isChecked: false, products:[3,11]},
    {id: 4, use:'Social gatherings', isChecked: false, products:[4]},
    {id: 5, use:'Travel', isChecked: false, products:[5]},
    {id: 6, use:'Motorcycling', isChecked: false, products:[6]},
    {id: 7, use:'Noise sensitivity', isChecked: false, products:[7]},
    {id: 8, use:'Playtime & schooltime', isChecked: false, products:[8]}    
  ]



const filterUniqueProductId = (array) => {

try {
	const uniqueProductIds = [];
	array.forEach((item) => {
		if (item.isChecked) {
			item.products.forEach( (item) => {
				if (!uniqueProductIds.includes(item)) {
					uniqueProductIds.push(item)
				}
			})
		}
	})		
	return uniqueProductIds;
} catch (error) {
	console.error("An error occurred", error)
}

}


console.log(filterUniqueProductId())
