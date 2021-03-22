/**
 * Define a function maxOfThree() that takes three numbers
 * as arguments and returns the largest of them.
 */
/**
 *This is simple function that computes maximum of three number;
 * @param {Number} x is number;
 * @param {Number} y is number;
 * @param {Number} z is number;
 * @returns{Number} largest of x,y,z;
 */
function maxOfThree(x, y, z) {
  if (x < 0) x = Math.abs(x);
  if (y < 0) y = Math.abs(y);
  if (z < 0) z = Math.abs(z);
  if (x > y) {
    if (x > z) return x;
    else return z;
  } else {
    if (y > z) return y;
    else return z;
  }
}
/**
 * This is simple function that return the sum os the given element of of the array
 * @param {Object} Arr is array;
 * @returns {Number} sum od each element;
 */

function sum(arr) {
  let totalSum = 0;
  for (let n of arr) totalSum += n;
  return totalSum;
}

/**
 * This is simple function that return the product of the given element of of the array
 * @param {Object} Arr is array;
 * @returns {Number} multiply of each element;
 */

function multiply(arr) {
  let totalProduct = 1;
  for (let n of arr) totalProduct = totalProduct * n;
  return totalProduct;
}

/**
 * This is simple function that takes an array of words and returns the length of the longest one.
 * @param {Object} str is array of string;
 * @returns {String } Longest word of str;
 */
function findLongestWord(str) {
  let longestWord = str[0];
  for (let word of str) {
    if (longestWord.length < word.length) longestWord = word;
  }
  return longestWord;
}

/**
 *
 * @param {Array} arr is array;
 * @returns{array} reverse of arr;
 */
function reverseArray(arr) {
  let revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return revArray;
}

function reverseArrayInPlace(arr){
    let revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return revArray;
}
/**
 * 
 * @param {Array} studentAnswer is Array; 
 * @param {Array} correctAnswers is Array;
 * @returns{Array} compute score;
 */
function scoreExams(studentAnswer,correctAnswers){
    let score=[]
    for(let eachAnswer of studentAnswer ){
        let answer=0
        for(let i=0;i<eachAnswer.length;i++){
            if(eachAnswer[i]===correctAnswers[i])
                   answer++;   
        }
        score.push(answer)
    }
    return score;
}
