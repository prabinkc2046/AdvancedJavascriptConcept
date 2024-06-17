function formatProduct(currency){
	return function(name){
		return function(price){
			return `${name} costs ${price} ${currency}`
		}
	}
}
