const PQ = require('./PriorityQueue.js');
const Tab = require('./BST_Dictionary.js');
const Map = require('./HT_Dictionary.js');
const Util = require('./GenCopyFunctions.js');

let HelperFunctions = new Util.GenCopyFunctions();
function insertArrayToHT(arr, D) { 
    let key;
    for(let n of arr){
      key=D.findValue(n)//return the values of the given id
      if(key===null)
         D.insertItem(n,1)
      else{
          key=key+1;
          D.insertItem(n,key)
      }
  }
}
function insertArrayToPQ(arr,PQ){
    for(let n of arr){
        PQ.insertItem(n,n)
    }
}
function insertArrayToBST(arr,BS){
    for(let n of arr){
        key=BS.findValue(n)//return the values of the given id
        if(key===null)
           BS.insertItem(n,1)
        else{
            key=key+1;
            BS.insertItem(n,key)
        }
    }
}
function isPermutationPQ(A, B) {
    let PQA = new PQ.PriorityQueue();
    let PQB = new PQ.PriorityQueue();
    insertArrayToPQ(A,PQA)
    insertArrayToPQ(B,PQB)
    let a,b;
    if(PQA.size()!==PQB.size())
       return false;
    while(!PQA.isEmpty()){
       a=PQA.removeMin()
       b=PQB.removeMin()
       if(a!==b)
         return false;
    }
    return true;
}
function isPermutationBST(A, B) {
    let DA = new Tab.OrderedDictionary();
    let DB = new Tab.OrderedDictionary();
    insertArrayToBST(A,DA)
    insertArrayToBST(B,DB)
    let iterA=DA.items()
    let iterB=DB.items()
    while(iterA.hasNext()){
       let a=iterA.nextObject()
       let b=iterB.nextObject()
       if(a.value()!==b.value())
          return false;
    } 
 return true
}
function isPermutationHT(A, B) {
    let DA = new Map.HT_Dictionary();
    let DB = new Map.HT_Dictionary();
    insertArrayToHT(A,DA)
    insertArrayToHT(B,DB)
    if(DA.size()!==DB.size())
       return false;
  let iterA=DA.items();
  while(iterA.hasNext()){
         let  a=iterA.nextObject()
         let aValue=DA.findValue(a.key())
         let bValue=DB.findValue(a.key())
         if(aValue!==bValue)
             return false;
}
return true
}
function isPermutationTest(A, B) {
    console.log("A=" + HelperFunctions.arrayToString(A));
    console.log("B=" + HelperFunctions.arrayToString(B));
    console.log("isPermutationPQ=" + isPermutationPQ(A, B));
    console.log("isPermutationHT=" + isPermutationHT(A, B));
    console.log("isPermutationBST=" + isPermutationBST(A, B));
    // console.log("isPermutationSort="+ isPermutationSort(A,B))
}

let A1 = [17, 15, 55, 19, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21];
let B1 = [17, 15, 55,     34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21, 19];
let A2 = [17, 15, 55, 20, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21];
let B2 = [17, 15, 55,     34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21, 99];

isPermutationTest(A1, B1); // True
isPermutationTest(A2, B2); // False
isPermutationTest(A1, B2); // False
isPermutationTest(A1, A2); // False
isPermutationTest(B1, B2); // False
