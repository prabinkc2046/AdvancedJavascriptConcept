



user1 = new ObjectPool();
user2 = new ObjectPool();

user1.addObject({name: "prabin"})
object1 = user1.getObject();
console.log(object1.name)
setTimeout(() => {
    user1.releaseObject(object1)
}, 2000)
setTimeout(() => {
    console.log(object1.name)
}, 4000)