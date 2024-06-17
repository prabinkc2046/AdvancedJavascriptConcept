//blue print for creating a queue object
class MyQueue <T> {
    private queue: T[];
    constructor (){
        this.queue = [];
    }
    enqueue(item: T): void {
        this.queue.push(item)
    }

    dequeue(): T | undefined {
        if (this.queue.length > 0){
            return this.queue.shift();
        } else {
            return undefined;
        }
    }

    peek(): T | undefined {
        if (this.queue.length > 0){
            return this.queue[0]
        } else {
            return undefined
        }
    }

    size(): number | undefined {
        if (this.queue.length > 0){
            return this.queue.length
        } else {
            return undefined
        }
    }
}



const q3 = new MyQueue<number>();
q3.enqueue(1)
console.log(q3.peek)

q3.enqueue(2)
console.log(q3.peek)

console.log(q3.dequeue());
console.log(q3.size())