
function pageLoad(){
   let clickBut=document.getElementById("clickCompute")
   clickBut.onclick=computeValue;
   function computeValue(){
    let number= +document.getElementById("fibValue").value
     if(number>=35){
       document.getElementById("wait").innerHTML="please wait a moment"  
     }
       let startLoop=Date.now()
      let loopValue=loopFibonacci(number);
      let endLoop=Date.now()
      document.getElementById("loopValue").innerHTML=loopValue;
      document.getElementById("loopTime").innerHTML=endLoop-startLoop;

      let startRec=Date.now()
      let recValue=recFibonacci(number);
      let endRec=Date.now()
      document.getElementById("recuValue").innerHTML=recValue;
      document.getElementById("recuTime").innerHTML=endRec-startRec;

      let startMemo=Date.now()
      let memoValue=memoFibonacci(number);
      let endMemo=Date.now()
      document.getElementById("memoValue").innerHTML=memoValue;
      document.getElementById("memoTime").innerHTML=endMemo-startMemo;
      document.getElementById("wait").innerHTML=""
   }
/**
 * 
 * @param {Number} num is integer
 * @returns{Number} return fibonacci of num
 */
 //let start= Date.now()
 function loopFibonacci(num){
     let a = 1, fib = 0, temp;
     while (num >= 1){
       temp = a;
       a = a + fib;
       fib = temp;
       num--;
     }
     return fib;
   }
  /**
  * 
  * @param {Number} num is integer
  * @returns{Number} return fibonacci of num
  */
   function recFibonacci(n){
     if(n===2||n===1|n===0)
     return 1;
     return recFibonacci(n-1)+recFibonacci(n-2)
 }
 /**
  * 
  * @param {Number} num is integer
  * @param {Object} memo store the computed value 
  * @returns{Number} return fibonacci of num
  */
 function memoFibonacci(num, memo={}) {
     if (memo[num]) return memo[num];
     if (num <= 2) return 1;
     return memo[num] = memoFibonacci(num - 1, memo) + memoFibonacci(num - 2, memo);
   }
   }
  function init(){
      window.onload=pageLoad
  }
  init();
  