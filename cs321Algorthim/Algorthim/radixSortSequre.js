//radix sort using  remainder and qationsts
function radixSort(arr){
    let max=findMax(arr)
    for(let i=0;i<2;i++){
        let digitBuckets = Array.from({length: max}, () => []);
      if(i===0){
        for(let i=0;i<arr.length;i++){
        let r=arr[i]%max
        digitBuckets[r].push(arr[i])
        } 
        arr=[].concat(...digitBuckets)
      } 
      if(i===1){
        for(let i=0;i<arr.length;i++){
        let q=Math.floor(arr[i]/max) 
        digitBuckets[q].push(arr[i])
        } 
        arr=[].concat(...digitBuckets)
      }  
    }
 return arr;
}
function findMax(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arr[i]
    }
 max=Math.floor(Math.sqrt(max))+1;
 return max;
}
let arr=[6,657,3,9,10,5678]
console.log(radixSort(arr))
console.log("+=================================")
let arr1=[345,12,789,34,7,2,3,90]
console.log(radixSort(arr1))