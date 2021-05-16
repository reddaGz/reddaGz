const List = require("./List.js");
function contains(list,e,p){
    if(e===p.element()) return true//n
    if(list.isLast(p)) return false//n
    return contains(list,e,list.after(p))//n
}

function cloneList(list,L){//this O(N)
    let p=L.first()//1
    while(!L.isLast(p)){//n
        list.insertFirst(p.element())//n
        p=L.after(p)//n
    }
    list.insertFirst(p.element())//1
}
function removeDuplication(L){
   let list=new List.List()
   cloneList(list,L)//to keep the original list //O(N)
   let p=list.first()//1
   while(!list.isLast(p)){//n
       if(contains(list,p.element(),list.after(p))){//n*n
           p=list.after(p)//n
           list.remove(list.before(p))//n
       }else{//n
           p=list.after(p)//n
       }  
   }
return list
}

let seq = new List.List();
seq.insertFirst(3);
seq.insertFirst(3);
seq.insertFirst(3);
seq.insertFirst(3);
seq.insertFirst(6);
seq.insertFirst(3);
seq.insertFirst(11);
seq.insertFirst(89);
seq.insertFirst(11);
seq.insertFirst(11);
seq.insertFirst(11);
console.log("Before remove duplications");
console.log(seq.toString());
console.log("After remove duplications");
let uniq = removeDuplication(seq);
console.log(uniq.toString());//uniqe
console.log(" after remove the original list should be the same ");
console.log(seq.toString())//