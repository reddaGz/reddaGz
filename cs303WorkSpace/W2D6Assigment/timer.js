/**
 * 
 * @param {Number} from it is integer
 * @param {Number} to it is integer
 */
function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(values, 1000);
    /**
     * 
     */
    function values() {
        console.log(current);
        if (current == to) {
          clearInterval(timerId);
        }
        current++;
      }
  }
  //printNumbers(5, 10); usinf setTimeOut
  function printNumber(from, to) {
    let current = from;
    function go() {
        console.log(current);
        if (current < to) {
          setTimeout(go, 1000);
        }
        current++;
      }
    setTimeout(go, 1000);
  }
  

  //printNumber(5, 10);


  /**
 * 
 * @param {Number} from it is integer
 * @param {Number} to it is integer
 */
function printNubersOnDelay(from, to) {
    let current = from;
    let delay=1000//(5,10) to print 5 will delay 5000 for 6 6000,7 7000 etc
    let timerId = setInterval(timer, delay); 
   function timer (){
        console.log(current);
        delay=current*1000
        clearInterval(timerId);
        timerId = setInterval(timer, delay);
        if (current == to) {
          clearInterval(timerId);
        }
        current++;
      }
  }
/**
 * to  print 5 it takes 5 seconed
 * to print next it takes prev+1= 6 seconed 
 */
  printNubersOnDelay(5,10)