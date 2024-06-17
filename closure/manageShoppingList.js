function createShoppingList(){
	let list = ["item"];
	function createList() {
		return {
			add: (item) => {
				list.push(item);
				return `${item} is added.`
			},
			viewList: () => {
				console.log("Current list of items");
				list.forEach((item) => {
					console.log(item)
				})
			},
		}
	}
	return createList;
}

const mylistCreater = createShoppingList();

const mylist = mylistCreater();

console.log(mylist.add("milk"));
console.log(mylist.add("gold"));
console.log(mylist.viewList());

