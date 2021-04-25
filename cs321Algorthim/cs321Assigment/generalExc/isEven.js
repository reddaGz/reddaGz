// function isEven(n){
//     if(n===0)
//       return true;
//       else
//       return !isEven(n-1)
// }
// function isEven1(n){
//  if(n===0) return true
//  if(n===1) return false;
//  return isEven1(n-2)
// }
// function isOdd(n){

// }
//this O(n)
function pow(x,k){
  if(k===0) return 1
  if(k<0) return (1/pow(x,-1*k))
  return  x*pow(x,k-1)
}
// console.log(pow(2,3))
//this is O(logn)
function power(x,k){
    if(k===0) return 1;
    if(k===1) return x;
    if(k<0) return (1/pow(x,-1*k))
    let k1=Math.floor(k/2)
    let result=power(x,k1)
      result=result*result;
    if(k%2===1)
      result=result*x;
      console.log(k)
    return result;
}
// console.log(pow(2,3))
// console.log(pow(2,-2))
console.log(power(2,3))
// console.log(power(2,-2))