const List = require("./Sequence.js");
function subSet(L){
   let result=[]
   let set=[];
   subSetHelper(L,result,set,0)
   return result;
}
 function subSetHelper(L,result,set,index){
      result.push(set)
      console.log(set)
     for(let i=index;i<L.size();i++){
         set.push(L.elemAtRank(i))
         subSetHelper(L,result,set,index=index+1)
         set.pop();  
     }
 } 

 let A = new List.Sequence();
 A.insertFirst(3);
 A.insertFirst(2);
 A.insertFirst(1);
 console.log(subSet(A))