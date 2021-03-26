"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests
/**
 * 
 * @param {Object} arr is array
 * @param {Number} a is min number
 * @param {Number} b is max number
 * @returns {Object} return array in range [a,b]
 */
function filterRange(arr, a, b) {
  let filteredArray = arr.filter((item) => a <= item && item <= b);
  return filteredArray;
}
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
/**
 * @returns {Calculator} constructor function
 */
function Calculator() {
    
  this.methods = {
      /**
       * 
       * @param {Number} a is number; 
       * @param {Number} b is number;
       * @returns{Number} return a-b; 
       */
    "-": (a, b) => a - b,
    /**
     * 
     * @param {Number} a is number;
     * @param {Number} b is number;
     * @returns{Number} return a+b;
     */
    "+": (a, b) => a + b,
     /**
     * 
     * @param {Number} a is number;
     * @param {Number} b is number;
     * @returns{Number} return a/b;
     */
    "/": (a, b) => a / b,
  };
  /**
   * 
   * @param {String} str is String 
   * @returns {Number} return compute number;
   */
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };
/**
 * 
 * @param {String} name is operator;
 * @param {Function} func is function ;
 */
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
/**
 * 
 * @param {String} arr is array of string;
 * @returns {String} return unique values
 */
function unique(arr) {
  if (arr.length === 0) return "";
  let uniqueResult = [arr[0]];
  for (let str of arr) {
    if (uniqueResult.indexOf(str) === -1) uniqueResult.push(str);
  }
  return uniqueResult;
}
/**
 * 
 * @param {Object} array is array;
 * @returns {Object} return object;
 */
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
      }, {})
}
/**
 * 
 * @param {Object} arr is array;
 * @returns {Object} return sorted value;
 */
function copySorted(arr) {
  return arr.slice().sort();
}
