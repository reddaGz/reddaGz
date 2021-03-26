"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests
/**
 *
 * @param {String} str  is a String
 * @returns {String} return string with first cappital
 */
function ucFirst(str) {
  if (str === "") return "";
  return str[0].toUpperCase() + str.slice(1);
}
/**
 * 
 * @param {String} str is string
 * @returns{Boolean} returns Boolean;
 */
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra")|| lowerStr.includes("xxx")
}
/**
 * 
 * @param {String} str is string;
 * @param {Number} maxLength is number;
 * @returns {String} returns truncate words;
 */
function truncate(str, maxLength) {
  if(str.length<maxLength)
    return str;
  return str.slice(0,maxLength-1)+"…"
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;

}
/**
 * 
 * @param {String} str is string;
 * @returns {Number} number;
 */
function extractCurrencyValue(str){
    return parseInt(str.substr(1))
}
/**
 * 
 * @param {String} str is string;
 * @returns{String} remove "-" and replace the next to "-"to capital
 */
function camelize(str) {
    if(str==="") return "";
    let index=0;
    let word=""
    let i
    for(i=0;i<str.length;i++){
        if(str[i]!=="-"){
            continue
            
        }else{
            if(i===str.length-1)
                break
             let c=str[i+1].toUpperCase()
            word=word+str.substring(index,i)+c
            index=i+2
        }
    }
    word=word+str.substring(index,i)
    return word

}

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
