const userProfile = new Map();

userProfile.set(1, {name: "prabin"})
userProfile.set(2, {name: "Sital"})
userProfile.set(3, {name: "Ram"})

console.log(userProfile)

// to access the value of key: 2
console.log(userProfile.get(2))

// to access all the keys
console.log(userProfile.keys())

// to access all the keys and values

userProfile.forEach((value, key) => {
    console.log(`key: ${key} and value: ${value.name}`)
})

// using for of
for (let [k,v] of userProfile){
    console.log(`key: ${k} and value: ${v.name}`)
}

// check if the key 2 exits
console.log(userProfile.has(4))
