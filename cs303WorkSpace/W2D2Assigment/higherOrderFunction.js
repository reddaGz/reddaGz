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
function myReduce(arr,callBack,intialValues=0){
    let result=intialValues;
    result=callBack(arr)
    return result;
}
/**
 * 
 * @param {Object} arr is array;
 * @param {Function} callBack  is call back function;
 * @param {Number} n is number
 * @returns{Number} return the first found values of n
 */
function myFind(arr,callBack,n){
    let found= callBack(arr,n)
    return found;
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