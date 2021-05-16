function ShellSort(arr) {
   // this._compCount = 0;
    //this._shiftCount = 0;
    let maxGap = Math.floor(arr.length/3);
    let gap = 1;
    while (gap <= maxGap) {
        gap = gap*3 + 1;
    }
    while (gap > 0) {
        _segmentInsertionSort(arr, gap);
        gap = (gap - 1) / 3;
    }
}
function _segmentInsertionSort(arr, gap) {
    for(let i=gap;i<arr.length;i++){
        let j=i;
        let temp=arr[i];
        while((gap-1)<j && temp<arr[j-gap]){
            arr[j]=arr[j-gap];
            j=j-gap;
            arr[j]=temp;
            //this._compCount++;
        }
    }
}
let arr=[12,9,4,5,1,678,89]
console.log(arr)
 ShellSort(arr) 
 console.log(arr)
