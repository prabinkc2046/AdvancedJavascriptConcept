data = [
  { category: 'A', item: 'item1' },
  { category: 'B', item: 'item2' },
  { category: 'A', item: 'item3' },
  { category: 'C', item: 'item4' }
];


const groupedItems = data.reduce((acc, obj) => {
	if (!acc[obj.category]){
		acc[obj.category] = [];
	}

	acc[obj.category].push(obj);
	return acc;
}, []);


console.log(groupedItems)
