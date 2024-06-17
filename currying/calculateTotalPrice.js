function calculateTotalPrice(taxRate, shippingCost, price){
	const totalPrice = price + (price * taxRate) + shippingCost;
	return totalPrice;
}

//currying it

function calculateTotalPrice(taxRate){
	return  function(shippingCost){
		return function(price){
			const total = price + (taxRate * price) + shippingCost;
			return total;
		}
	}
}
