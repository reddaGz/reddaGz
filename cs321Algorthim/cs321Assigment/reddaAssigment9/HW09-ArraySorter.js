const pq = require('./PriorityQueue.js');
let sequence=require('./Sequence.js');
class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    numShifts() {
        return this._shiftCount;
    }
    print(arr) {
        let last = arr.length - 1;
        let res = "[";
        for (let i=0; i<=last; i++) {
            res = res + arr[i];
            if (i<last) {
                res = res + ", ";
            }
        }
        console.log(res + "]");
    }

    _heapify(arr) {
    let last=arr.length-1;
    let next=last;
    while(next>0){
        this._downheap(arr,this._parent(next),last)
        next=next-2;
    }
    }
    _parent(index) {
        return Math.floor((index-1)/2);
    }
    _downheap(arr, index, last) {
        let property=false;
        while(!property){
            let maxIndex=this._indexOfMax(arr,index,last)
            if(maxIndex!==index){
                this._swapElements(arr,maxIndex,index)
                index=maxIndex;
            }
             
             else
              property=true;
        }
    }
    _swapElements(arr, j, k) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        this._swapCount++;
    }
    _indexOfMax(arr, index, last) {
       let largest=index;
       let left=2*index+1;
       let right=left+1; 
       if(left<=last && arr[left]>arr[largest])
          largest=left;
       if(right<=last&& arr[right]>arr[largest])
          largest=right;
        this._compCount++;
    return largest
    }
    _indexOfMini(arr,bottom,top){
        let mini=arr[bottom];
        let minIndex=bottom;
        for(let i=bottom+1;i<=top;i++){
            if(mini>arr[i]){
                mini=arr[i]
                minIndex=i;
                this._compCount++;
            }
        }
        return minIndex;
    }
    heapSort(arr) {
        this._compCount = 0;
        this._swapCount = 0;
        this._heapify(arr);
        console.log("key comparisons to build the Heap " + this._compCount);
        let end=arr.length-1;
        while(end>0){
            this._swapElements(arr,0,end)
             end=end-1;
            this._downheap(arr,0,end)
        }
    }
    selectionSort(arr){
        this._compCount=0;
        this._swapCount=0;
        this._selectionSort(arr)
    }
    _selectionSort(arr){
        let last=arr.length-1;
      for(let i=0;i<arr.length;i++){
          let minIndex=this._indexOfMini(arr,i,last);
           this._swapElements(arr,i,minIndex)
           this._swapCount++
      } 
    }

    insertionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._insertionSort(arr);
    }
    _insertionSort(arr) {
        for(let i=1;i<arr.length;i++){
          let j=i;
          let temp=arr[j]; 
          while(0<j && temp<arr[j-1]) {
              arr[j]=arr[j-1]
              j=j-1;
              arr[j]=temp
              this._compCount++
              this._shiftCount++;
          }
        }
    }

    ShellSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        let maxGap = Math.floor(arr.length/3);
        let gap = 1;
        while (gap <= maxGap) {
            gap = gap*3 + 1;
        }
        while (gap > 0) {
            this._segmentInsertionSort(arr, gap);
            gap = (gap - 1) / 3;
        }
    }
    _segmentInsertionSort(arr, gap) {
        for(let i=gap;i<arr.length;i++){
            let j=i;
            let temp=arr[i];
            while((gap-1)<j && temp<arr[j-gap]){
                arr[j]=arr[j-gap];
                j=j-gap;
                arr[j]=temp;
                this._compCount++;
            }
        }
    }
    PQSort(arr){
        let PQ=new pq.PriorityQueue();
        let seq=new sequence.Sequence()
        if(Array.isArray(arr)) {
            this._arrayToSequence(arr,seq)
           }
        this._PQSort(seq,PQ)
       if(Array.isArray(arr)) {
        this._sequenceToArray(arr,seq)
       }
    }
    _PQSort(seq,PQ){
        while(seq.size()>0) {//n
            let e=seq.remove(seq.first()) //1*n
              PQ.insertItem(e,e)//1*n
        }
        while(PQ.size()>0){
          let e=PQ.removeMin() 
           seq.insertLast(e)
        } 
    }
    PQColorSort(arr){
        let PQ=new pq.PriorityQueue();
        let seq=new sequence.Sequence()
        if(Array.isArray(arr)) {
            this._arrayToSequence(arr,seq)
           }
        this._PQColorSort(seq,PQ)
       if(Array.isArray(arr)) {
        this._sequenceToArray(arr,seq)
       }
    }
    _PQColorSort(seq,PQ){
       while(seq.size()>0) {//n
           let e=seq.remove(seq.first()) //1*n
            if(e==="Red")
             PQ.insertItem(1,e)//1*n
           else if(e==="Blue")
             PQ.insertItem(2,e)
          else if(e==="Green")
            PQ.insertItem(3,e)
       }
       while(PQ.size()>0){
         let e=PQ.removeMin() 
          seq.insertLast(e)
       }
    }
    _arrayToSequence(arr,seq){
     for(let i=0;i<arr.length;i++){
        seq.insertLast(arr[i])
     }
    }
    _sequenceToArray(arr,seq){
       let p=seq.first();
       let i=0;
       while(!seq.isLast(p)){
          arr[i]= p.element();
          p=seq.after(p) 
          i++; 
       }
       arr[i]=p.element()
    }
  _getDigit(n,i){
 return Math.floor((n/Math.pow(10,i))%10)
  }
  _numOfDigit(n){
   return Math.floor(Math.log10(n))+1; 
  }
  _maxOfDigit(arr){
      let maxDigit=0;
      for(let i=0;i<arr.length;i++){
          maxDigit=Math.max(maxDigit,this._numOfDigit(arr[i]))
      }
    return maxDigit;
    }
   radixSort(arr){
    let maxDigit = this._maxOfDigit(arr);
    for(let k = 0; k < maxDigit; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let digit = this._getDigit(arr[i],k);
             digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr
   } 
   _merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
   mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = this.mergeSort(arr.slice(0,mid));
    
    let right = this.mergeSort(arr.slice(mid));
    console.log(arr)
    return this._merge(left, right);
}
//    _partioning(seq){
//      let seqArr=[]
//      let s1=new sequence.Sequence()
//      let s2=new sequence.Sequence()
//      let mid=Math.floor(seq.size()/2)
//     while(mid>0){
//         let e=seq.remove(seq.first())
//         s1.insertLast(e)
//         mid--;
//     }
//     while(!seq.isEmpty()){
//         let e=seq.remove(seq.first())
//         s2.insertLast(e)
//     }
//     seqArr.push(s1)
//     seqArr.push(s2)
// return seqArr
//    }
//    _merge(A,B,seq){
//     while(A.size()>0 && B.size()>0){
//        if(B.first().element()>A.first().element()) 
//             seq.insertLast(B.remove(B.first()))
//         else
//         seq.insertLast(A.remove(A.first()))
//     }
//     while(A.size()>0){
//         seq.insertLast(A.remove(A.first())) 
//     }
//     while(B.size()>0){
//         seq.insertLast(B.remove(B.first()))
//     }
//     return seq;
//    }
//    mergeSort(seq){
//     let left,right
//      if(seq.size()>1){
//         let partSeq=this._partioning(seq) 
//         left=partSeq[0] 
//         right=partSeq[1]
//         this.mergeSort(left)
//         this.mergeSort(right)
//         seq=this._merge(left,right,seq)
//      } 
//    }
}

exports.ArraySorter = ArraySorter;
 let sort=new ArraySorter()
 let S=new sequence.Sequence()
S.insertLast(5)
S.insertLast(9)
S.insertLast(45)
S.insertLast(29)
 let arr=[56,12,45]
 console.log(sort.mergeSort(arr))  
//   console.log(arr)
//console.log(sort._numOfDigit(1967))
// let arr=[11,3,1,67]
// console.log(arr)
// sort.ShellSort(arr)
// console.log(arr)
// console.log(sort._compCount)
// console.log(sort._swapCount)

