function sum1(arr){
    let smallest=arr[0];
    let seconedSmallest=arr[1];
    for(let n of arr){
     if(n<smallest){
       seconedSmallest=smallest;
      smallest=n;
    }
    else if(n<seconedSmallest){
    seconedSmallest=n
    }
    }
    console.log(smallest)
    return seconedSmallest
   }
let arr=[5,2,8,1,1,3,45]
console.log(sum1(arr))