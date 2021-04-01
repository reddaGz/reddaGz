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
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  /**
   * 
   * @param {Object} list is object
   * @param {Object} result is array
   * @returns {Object} return preorder;
   */
  function outputListLoop(list,result=""){
      while(list!==null){
        result+=list.value+" "
          list=list.next
      }
      return result
  }
//   console.log(outputListLoop(list))
//   console.log(outputListLoop(list)==="1234")
  /**
   * 
   * @param {Object} list is object
   * @param {Object} result is array
   * @returns {Object} return preorder;
   */
  function outputList(list,result=""){
      if(list===null){
        return result
      } 
     else{
         result+=list.value+" "
         return outputList(list.next,result)
    
     } 
  }
  //console.log(outputList(list))
/**
   * 
   * @param {Object} list is object
   * @returns {Object} return postOrder;
   */
  function reverseListLoop(list){
      let result=[]
      let reverse=""
      while(list!==null){
        result.push(list.value)
          list=list.next
      }
    for(let i=result.length-1;i>=0;i--){
        reverse+=result[i]+" "
    }
    return reverse
  }
  //console.log(reverseListLoop(list))
  /**
   * 
   * @param {Object} list 
   */
   function reverseList(list,result="") {
  
    if (list.next) {
        reverseList(list.next,result);
    }
    // console.log(list.value)//am commented this part b.c of the console part to be able to run on the browesor
  }
   

