const List = require('./HW02-B-Stack');
class QueueTwoStack {
    constructor() {
        this._enqueue=new List.Stack();//main stack
        this._dequeue=new List.Stack()//auxilary stack
    }
    enqueue(elem) {
    this._enqueue.push(elem)
    }
    dequeue() {
     if(this._dequeue.isEmpty() && this._enqueue.isEmpty())
         throw Error("Empty queue")
    if(!this._dequeue.isEmpty())
       return this._dequeue.pop() 
    else{
       while(!this._enqueue.isEmpty()){
           this._dequeue.push(this._enqueue.pop())
       } 
       return this._dequeue.pop();
    }
    }
    // isEmpty() {
    //  return this._enqueue.isEmpty()
    // }
    size() {
     return this._enqueue.size()+this._dequeue.size()
    }
    elements() {
    return this._dequeue.element()
    }
    toString() {
     return this._enqueue.toString()+" "+this._dequeue.toString();
    }
}

let Q = new QueueTwoStack();
Q.enqueue("a");
Q.enqueue("b");
Q.enqueue("C");
console.log(Q.toString());
//Q.dequeue();
 console.log(Q.toString());
// console.log("Dequeue=" + Q.dequeue());
// Q.enqueue("e");
// Q.enqueue("f");
// Q.enqueue("g");


// console.log("Dequeue e, f, and g");
// console.log("Dequeue=" + Q.dequeue());
// console.log("Dequeue=" + Q.dequeue());
// console.log("Dequeue=" + Q.dequeue());
// console.log("Dequeue=" + Q.dequeue());
// console.log(Q.toString())
// Q.enqueue("h");
// Q.enqueue("i");
// Q.enqueue("j");
// console.log("+++++++++++++++++++++++++++++");
//console.log(Q.toString());
// console.log("Enqueue h, i, and j");
// console.log("Dequeue=" + Q.dequeue());
// console.log("Dequeue=" + Q.dequeue());
// console.log("Dequeue=" + Q.dequeue());
// console.log(Q.toString());

/**
 * // while (!this._stack1.isEmpty())
    // { 
    //     this._stack2.push(this._stack1.pop()); 
    // }  
    // this._stack1.push(elem); 
    // while (!this._stack2.isEmpty()) 
    // { 
    //     this._stack1.push(this._stack2.pop()); 
    // } 
    // return elem;
 */