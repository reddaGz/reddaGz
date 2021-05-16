const {Sequence} = require('./Sequence.js');
function electionResult(seq){
let v=seq.first()
let count=0;
let eachCount=0;
let winner=v;
while(!seq.isLast(v)){
     eachCount=countVote(seq,v)
    if(eachCount>count){
        count=eachCount;
        winner=v
     }
    v=seq.after(v) 
 }
 eachCount=countVote(seq,v)//last candidate
 if(eachCount>count){
    count=eachCount;
    winner=v
  }
  return winner;
}
 function countVote(seq,v){
    let p=seq.first();
    let count=0;
    while(!seq.isLast(p)){
        if(v.element()===p.element())
              count++; 
        p=seq.after(p)
    }
    if(v.element()===p.element())
            count++; 
 return count;
 }
 let list1 = new Sequence();
 list1.insertFirst("redda");
 list1.insertFirst("aman");
 list1.insertFirst("redda");
 list1.insertFirst("aman");
 list1.insertFirst("redda");
 list1.insertFirst("ezra");
list1.insertFirst("desta");
list1.insertFirst("desta");
list1.insertFirst("desta");
list1.insertFirst("desta");
//winner will be "desta" b.c of most frequnt

console.log(electionResult(list1))