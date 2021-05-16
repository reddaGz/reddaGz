const {Sequence} = require('./Sequence.js');
function electionResult(seq){
let v=seq.first()//1
let count=0;//1
let eachCount=0;//1
let secondCount=0//1
let firstWinner=v;//1
let secondWinner=v;//
let result=[];
while(!seq.isLast(v)){//n
     eachCount=countVote(seq,v)//n*n
         if(eachCount>count){//n/2
            secondCount=count;//n/2
            secondWinner=firstWinner;//n/2
            count=eachCount;//n/2
            firstWinner=v//n/2
         }else if(eachCount>secondCount){//n/2
            secondCount=eachCount;//n/2
            secondWinner=v;//n/2
         }
    v=seq.after(v)//n 
 }
 eachCount=countVote(seq,v)//1
    if(eachCount>count){//1
      secondCount=count;
      secondWinner=firstWinner;
      count=eachCount;
      firstWinner=v
   }else if(eachCount>secondCount){
      secondCount=eachCount;
      secondWinner=v;
   }
  result.push(firstWinner)//1
  result.push(secondWinner)//1
 return result;//1
}
//Time complexity O(n^2)
 function countVote(seq,v){//
    let p=seq.first();//1
    let count=0;//1
    while(!seq.isLast(p)){//n
        if(v.element()===p.element())//n
              count++; //n
        p=seq.after(p)//n
    }
    if(v.element()===p.element())//1
            count++; //1
 return count;//1
 }
 let list1 = new Sequence();//list of candidates and number of votes
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
console.log(electionResult(list1))