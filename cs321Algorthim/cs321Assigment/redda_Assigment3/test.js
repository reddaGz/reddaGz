function seconedLargets(arr){

}
function largest(arr){
    let result=[]
    result.push(arr[arr.length-1])
    let n=arr[arr.length-1]
    for(let j=arr.length-1;j<=0;j--){
        if(n!=arr[j])
           result.push(arr[j])
    }
    return result;
}


let arr=[76,78,1,78,78,78,77]
   console.log(largest(arr))
   //console.log(twoLargestValue(arr))