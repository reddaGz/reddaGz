function union(A,B){
   let abUnion=[] //1
   let len=A.length>B.length?B.length:A.length;//1
   let j=0;//1
   let i=0;//1
   for( i=0;i<len;i++){//n
       if(A[i]===B[j]){//n/3
           if(indexOf(abUnion,A[i])===-1){//n*n/3
               abUnion.push(A[i])   //n*n/3
           }
           j++  //n    
       }else if(A[i]>B[j]){//n/3
        if(indexOf(abUnion,B[j])===-1){//n*n/3
            abUnion.push(B[j])   ////n*n/3    
        } 
        i--;//n
        j++;//n
       }else {//n/3
        if(indexOf(abUnion,A[i])===-1){//n*n/3
            abUnion.push(A[i]) //n*n/3
        } 
        j--  //n
       }    
   }
   while(i<A.length){//n
    if(indexOf(abUnion,A[i])===-1)//n*n
        abUnion.push(A[i]) //n*n
    i++//n
   }
   while(j<B.length){//n
    if(indexOf(abUnion,B[j])===-1)//n*n
       abUnion.push(B[j])//n*n
    j++//n
   }
   return abUnion;//1
}
function indexOf(arr,n){
    if(arr.length===0) return -1;//1
    for(let i=0;i<arr.length;i++){//n
        if(arr[i]===n)//n
        return i;//1
    }
   return -1;//1
}
let A=[1,1,4,5,9,10,10,01]
let B=[1,1,1,2,8,9,10,10,67,89]
 console.log(union(A,B)) 
 let C=[4,9]
 let D=[3,10,12]
 console.log(union(C,D)) 
