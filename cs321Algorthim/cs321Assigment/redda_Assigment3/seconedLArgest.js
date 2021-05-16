const { List } = require("./List")

function seconedSmallest(arr){
    let smallest=arr[0];
    let seconedSmallest=arr[0];
    for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
    seconedSmallest=smallest;
    smallest=arr[i];
    }
    else if(arr[i]<seconedSmallest){
    seconedSmallest=arr[i]
    }
    if(smallest===seconedSmallest && i<arr.length-1){
        smallest=arr[i+1]
    }
    }
    let resuult=[]
    resuult.push(smallest)
    resuult.push(seconedSmallest)
    return resuult
   }
   function secondLargest(arr){
       let largest=arr[0]
       let secondLarg=arr[0]
       for(let n of arr){
           if(n>largest){
               secondLarg=largest;
               largest=n
           }else if(n>secondLarg){
               secondLarg=n;
           }
       }
       let result=[]
           result.push(largest,secondLarg)
       return result;
   }
   function twoLargestValue(arr){
       let l1=arr[0]
       let l2=arr[1]
       let result=[];
       for(let i=2;i<arr.length;i++){
           if(l1===l2 &&l1<arr[i]){
                 l1=arr[i]
                 continue;
             }
        else  if(l1<arr[i]){
               l2=l1;
               l1=arr[i];
           }else if(l2<arr[i]){
               l2=arr[i]
           }
       }
      result.push(l1) 
      
      return result
   }
   let arr=[76,78,1,78,78,78,77]
   console.log(seconedSmallest(arr))
   console.log(twoLargestValue(arr))
// let list=new List()
// list.insertFirst(3)
//  list.insertFirst(9)
//  list.insertFirst(6)
//  list.insertFirst(21)
//  list.insertFirst(6)
// twoLargest(list)