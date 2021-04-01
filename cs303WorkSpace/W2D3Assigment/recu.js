"use strict"
/**
 * 
 * @param {Number} n is integer
 * @returns{Number} return sum up to n
 */
function sumTo(n){
    if(n===1)
    return 1;
    return n+sumTo(n-1)
}
/**
 * 
 * @param {Number} n is integer
 * @returns{Number} return factorial
 */
function factorial(n){
    if(n==1||n==0)
        return 1;
    return n*factorial(n-1)
}
/**
 * 
 * @param {Number} n is integer;
 * @returns{Number} return fib of n; 
 */
function fibonacci(n){
    if(n===2||n===1|n===0)
    return 1;
    return fibonacci(n-1)+fibonacci(n-2)
}
/**
 * this input list to test the recurtion
 */
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  /**
   * 
   * @param {Object} list is object
   * @param {Object} result is array
   * @returns {Object} return preorder;
   */
  function outputListLoop(list,result=[]){
      while(list!==null){
        result.push(list.value)
          list=list.next
      }
      return result
  }
  /**
   * 
   * @param {Object} list is object
   * @param {Object} result is array
   * @returns {Object} return preorder;
   */
  function outputList(list,result=[]){
      if(list===null){
        return result
      } 
     else{
         result.push(list.value)
         return outputList(list.next,result)
    
     }
     
  }
/**
   * 
   * @param {Object} list is object
   * @returns {Object} return postOrder;
   */
  function reverseListLoop(list){
      let result=[]
      let reverse=[]
      while(list!==null){
        result.push(list.value)
          list=list.next
      }
    for(let i=result.length-1;i>=0;i--){
        reverse.push(result[i])
    }
    return reverse
  }
  /**
   * 
   * @param {Object} list 
   */
   function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
    console.log(list.value);
  }
   
