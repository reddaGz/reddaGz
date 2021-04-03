"use strict"
/**
 * 
 * @param {Object} arr is array 
 * @returns{Object} return function
 */
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  /**
   * 
   * @param {Number} a is integer
   * @param {Number} b is integer
   * @returns{Boolean} return boolean
   */
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
/**
 * 
 * @param {String} fieldName is key;
 * @returns{Object}  return sorted object
 */
  function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
  /**
   * 
   * @returns{Object} return array of function 
   */
  function makeArmy() {
    let shooters = [];
    for(let i = 0; i < 10; i++) {
      let shooter = function() {
        return i ; 
      };
      shooters.push(shooter);
    }
    return shooters;
  }
 