const Tree = require('./BinarySearchTree.js');

class EulerTour {  // the Euler Tour Template class
    visitExternal(T, p, result) { }
    visitPreOrder(T, p, result) { }
    visitInOrder(T, p, result) { }
    visitPostOrder(T, p, result) { }
    eulerTour(T, p) {
        let result = new Array(3);
        if (T.isExternal(p)) {
            this.visitExternal(T, p, result);
        } else {
            this.visitPreOrder(T, p, result);
            result[0] = this.eulerTour(T, T.leftChild(p));
            this.visitInOrder(T, p, result);
            result[2] = this.eulerTour(T, T.rightChild(p));
            this.visitPostOrder(T, p, result);
        }
        return result[1];
    }
}
class PrintInOrder {  // print the items in a Tree T using an iterator
    constructor(T) {
        this._iter = T.keys();
    }
    print() {
        this._iter.reset();
        let res = "[";
        while (this._iter.hasNext()) {
            let next = this._iter.nextObject();
            res = res + next;
            if (this._iter.hasNext()) {
                res = res + " ";
            }
        }
        console.log(res + "]");
    }
}
class Print extends EulerTour {  // Print the items in a Binary Search Tree using the Euler Tour Template
    visitExternal(T, v, result) {
        result[1] = "";
    }
    visitPostOrder(T, v, result) {
        result[1] = "(" + result[0] + "L, " + v.element().key() + " ,R" + result[2] +")";
    }
    print(T) {
        if (T.size() > 0) {
            console.log("Root="+T.root().element().key());
        }
        let res = this.eulerTour(T, T.root());
        console.log("[" + res + "]\n");
    }
}


class Height extends EulerTour {
        // add your code here, i.e., override methods from EulerTour class
    findMin(T) {
        return this.eulerTour(T, T.root());  // this is your helper from the EulerTour Template class 
    }
    eulerTour(T, p) {
       let left=0;
       let right=0;
        if (T.isExternal(p)) {
            this.visitExternal(T, p);
        } else {
             this.visitPreOrder(T, p);
            left = this.eulerTour(T, T.leftChild(p));
            this.visitInOrder(T, p);
            right = this.eulerTour(T, T.rightChild(p));
            //this.visitPostOrder(T, p); 
            if(left.element()>right.element()) return right
            return left
        } 
        if(left.element()>right.element())
            return right;
      else return left
    }
}
// Test cases follow here
var t0 = new Tree.BinarySearchTree();

// var printer = new Print();
var h = new Height();
var t1 = new Tree.BinarySearchTree();
console.log("==================")
t0.insertItem(400, 400);


t0.insertItem(150, 150);
t0.insertItem(100, 100);
t0.insertItem(200, 200);
t0.insertItem(450, 450);
t0.insertItem(350, 350);
t0.insertItem(250, 250);
t0.insertItem(650, 650);
t0.insertItem(550, 550);

console.log(h.findMin(t0))
