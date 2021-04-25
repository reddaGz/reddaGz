const List = require('./DLinkedList.js');

class Queue {
    constructor() {
        this._queue=new List.DLinkedList();
    }
    enqueue(elem) {
    return this._queue.insertLast(elem)
    }
    dequeue() {
    return this._queue.removeFirst()
    }
    isEmpty() {
     return this._queue.isEmpty()
    }
    size() {
     return this._queue.size()
    }
    elements() {
    return this._queue.element();
    }
    toString() {
     return this._queue.toString();
    }
}

let Q = new Queue();
Q.enqueue("a");
Q.enqueue("b");
Q.enqueue("c");
Q.enqueue("d");
console.log(Q.toString());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("e");
Q.enqueue("f");
Q.enqueue("g");
console.log("Enqueue e, f, and g");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("h");
Q.enqueue("i");
Q.enqueue("j");
console.log("Enqueue h, i, and j");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log(Q.toString());
