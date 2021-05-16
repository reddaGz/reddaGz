//radix sort using  remainder and qationsts
function radixSort(arr){
    let max=findMax(arr)
    for(let i=0;i<2;i++){//1
        let digitBuckets = Array.from({length: max}, () => []);//1
      if(i===0){
        for(let i=0;i<arr.length;i++){//n
        let r=arr[i]%max
        digitBuckets[r].push(arr[i])
        } 
        arr=[].concat(...digitBuckets) //O(n)
      } 
      if(i===1){
        for(let i=0;i<arr.length;i++){ //n
        let q=Math.floor(arr[i]/max) 
        digitBuckets[q].push(arr[i])
        } 
        arr=[].concat(...digitBuckets) //n
      }  
    }
 return arr;
}

function findMax(arr){//O(n)
    let max=arr[0]
    for(let i=0;i<arr.length;i++){ //O(n)
        if(arr[i]>max)
            max=arr[i]
    }
 max=Math.floor(Math.sqrt(max))+1;
 return max;
}
let arr=[6,657,3,9,10,689234,5678]
console.log(radixSort(arr))
console.log("+=================================")
let arr1=[345,12,789,34,7,2,3,90]
console.log(radixSort(arr1))