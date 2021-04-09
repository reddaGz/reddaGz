"use strict"
/**
 * 
 * @param {Object} arr is array 
 * @param {Function} CallBack is call back function
 * @returns{Object} return mapped values 
 */
function myMap(arr,CallBack){
    let mapArr=CallBack(arr)
    return mapArr
}
/**
 * 
 * @param {Object} arr is array 
 * @param {Function} callBack  is callBack function
 * @returns{Object} returns filtered value
 */
function myFilter(arr ,callBack){
  let filterArr=callBack(arr)
  return filterArr;
}
/**
 * 
 * @param {Object} arr is array
 * @param {Function} callBack is call back function 
 * @param {Any} intialValues is intial values
 * @returns {Any} returns the computed result 
 */
function myReduce(arr,callBack,intialValues=0){//default value

    for(let n of arr){
        intialValues =callBack(n,intialValues)
   }
   return intialValues
}
// let arr=[20,4,5,40,6,7,8]
// function add(n1,n2){
//     return n1>n2?n1:n2
// }
// console.log(myReduce(arr,add,arr[0]))
/**
 * 
 * @param {Object} arr is array;
 * @param {Function} callBack  is call back function;
 * @param {Number} n is number
 * @returns{Number} return the first found values of n
 */
function myFind(arr,callBack,num){
   for(let n of arr ){
      if(callBack(n,num))
      return n;
   }
}
/**
 * 
 * @param {Object} arr is array;
 * @param {Function} callBack is call back function
 * @param {Number} n is the target value
 * @returns{Number} return the first index of n; 
 */
function myFindIndex(arr,callBack,n){
    let index=callBack(arr,n)
    return index;
}
/**
 * 
 * @param {Object} arr is array; 
 * @param {Function} callBack is function;
 * @param {Number} n is target number
 * @returns{Number} return the last index values of n
 */
function myFindLastIndex(arr,callBack,n){
    let lastIndex=callBack(arr,n)
    return lastIndex
}
/**
 * 
 * @param {Object} arr is array;
 * @param {Function} callBack is function 
 * @param {Number} n is target number
 * @returns{Boolean} return true if n exists in the array 
 */
function myIncludes(arr,callBack,n){
    let include=callBack(arr,n)
    return include;
}