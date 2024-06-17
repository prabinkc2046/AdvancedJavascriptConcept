
api = "https://jsonplaceholder.typicode.com/users"

function fetchAndProcess(url){
	return function(filter){
		return async function(transform){
			return await fetch(url)
			.then(response => response.json())
			.then(data => {
				const filteredData = data.filter(filter);
				const transformedData = filteredData.map(transform);
				return transformedData;
			})
		}
	}
}

const users = fetchAndProcess(api);

const user = users(user => user.name.startsWith("a")) //filter by user that start with given letter

const transformedUser = user( user => user.name += "_modified") //transform here add somehing change something 
