function Queue () {
    this.queue = [];
}

Queue.prototype.enqueue = function(item){
    this.queue.push(item);
}

Queue.prototype.dequeue = function(){
    if(this.queue.length > 0){
        return this.queue.shift();
    } else {
        return undefined;
    }
}

Queue.prototype.peek = function(){
    if (this.queue.length > 0){
        return this.queue[0]
    } else {
        return undefined;
    }
}

Queue.prototype.size = function(){
    return this.queue.length;
}
const q1 = new Queue();
q1.enqueue("hari")
console.log(q1.peek())

q1.enqueue("prabin")
console.log(q1.peek())

q1.enqueue("shyam")
console.log(q1.peek())

q1.enqueue("Geeta")
console.log(q1.queue)

console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());

console.log("removing front item")
console.log(q1.queue)

console.log(q1.peek())



