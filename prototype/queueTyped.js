"use strict";
//blue print for creating a queue object
class MyQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.queue.length > 0) {
            return this.queue.shift();
        }
        else {
            return undefined;
        }
    }
    peek() {
        if (this.queue.length > 0) {
            return this.queue[0];
        }
        else {
            return undefined;
        }
    }
    size() {
        if (this.queue.length > 0) {
            return this.queue.length;
        }
        else {
            return undefined;
        }
    }
}
const q3 = new MyQueue();
q3.enqueue(1);
q3.enqueue(2);
console.log(q3.peek);
q3.dequeue();
console.log(q3.size());
