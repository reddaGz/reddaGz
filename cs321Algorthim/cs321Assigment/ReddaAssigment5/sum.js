
const List = require("./BinaryTree.js");
// function sum(T){
//     return sumHelper(T,T.root(),0)
// }

// function sumHelper(T,V){
//     if(T.isExternal())
//         return s;
        
//   return   V.element()+ sumHelper(T.leftChild(V),s)+sumHelper(T.rightChild(V),s)
// }
function hight(T){
    return hightHelper(T,T.root())
}
function hightHelper(T,V){
    if(T.isExternal(V)) return 0
    else{
       let leftH=hightHelper(T,T.leftChild(V))
       let rightH=hightHelper(T,T.rightChild(V))
        if(leftH>rightH)  
             return leftH+1;                        
        return rightH+1;                                         
    }
}
let tree =new List.BinaryTree()
tree.insertRoot(5)
let a=tree.insertLeft(tree,3)
let b=tree.insertRight(tree,4)


let c=tree.insertLeft(a,8)
let d=tree.insertRight(a,9)
let f=tree.insertLeft(c,10)
let g=tree.insertRight(c,11)
let m=tree.insertLeft(f,9)

//tree.insertLeft(tree,7)
console.log(hight(tree))
