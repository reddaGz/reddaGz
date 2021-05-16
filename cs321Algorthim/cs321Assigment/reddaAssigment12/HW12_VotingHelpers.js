const Pair = require('./Item.js');
const PQueue = require('./PriorityQueue.js');

class VotingHelpers {
    _countElementsOfSeq(seq, D) {
        // count the elements in seq and store the count for each candidate in Dictionary D
     let iter=seq.elements()
     let cnt=0;
     while(iter.hasNext()){
        let e=iter.nextObject()
        cnt=D.findValue(e)
        if(cnt===null){
            D.insertItem(e,1)
        }else{
            cnt++;
            D.insertItem(e,cnt)
        }
     }
    }
    _countElementsOfArray(arr, D) {
        // count the elements in seq and store the count for each candidate in Dictionary 
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

    _findWinnersFromDictionary(D) {
        // The count for each candidate should be in Dictionary D
        // Iterate through the Items (ID, count) and find the winners and put in the array 
        let iterD = D.items();
        let winners = [];
        let max=0;
        while(iterD.hasNext()){
           let item= iterD.nextObject()
            if(item.value()>max){
                  winners=[]
                  winners.push(item)
                  max=item.value()
            }else if(item.value()===max){
                winners.push(item)
            }
        }
    return winners;
    }
    findWinnersSeqUsingDict(seq, D) {
        this._countElementsOfSeq(seq, D);
         D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;
    }
    findWinnersArrayUsingDict(arr, D) {
        this._countElementsOfArray(arr, D);
         D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;
    }

    _insertSeqIntoPQ(seq, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
        let p = seq.first();
        PQ.insertItem(p.element(),p.element())
        while(!seq.isLast(p)){
            p=seq.after(p) 
            PQ.insertItem(p.element(),p.element())
        }
    }
   
    _insertArrayIntoPQ(arr, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
    for(let id of arr){
       PQ.insertItem(id,id)
     }
    }

    _findWinnersFromPQ(PQ) {
        // Traverse the Priority Queue and determine the winners
        let winners = [];
        let max=0;
        let cnt=0;
        let cur=PQ.removeMin()
        while(!PQ.isEmpty()){
         let next=PQ.removeMin()
         if(cur===next)
            cnt++;
        else{
            if(cnt>max){
                max=cnt;
                winners=[]
                winners.push(new Pair.Item(cur,cnt))
            }else if(cnt===max){
                winners.push(new Pair.Item(cur,cnt))  
            }
        cnt=1;
        cur=next     
        }    
        }
        if(cnt>max){
            max=cnt;
            winners=[]
            winners.push(new Pair.Item(cur,cnt))
        }else if(cnt===max){
            winners.push(new Pair.Item(cur,cnt))  
        }
        return winners;
    }
    findWinnersFromSeqUsingPQ(seq) {
        let PQ = new PQueue.PriorityQueue();
        this._insertSeqIntoPQ(seq, PQ);
        return this._findWinnersFromPQ(PQ);
    }    
    findWinnersFromArrayUsingPQ(arr) {
        let PQ = new PQueue.PriorityQueue();
        this._insertArrayIntoPQ(arr, PQ);
        return this._findWinnersFromPQ(PQ);
    }    
}

exports.VotingHelpers = VotingHelpers;
