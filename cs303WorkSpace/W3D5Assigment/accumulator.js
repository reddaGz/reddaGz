"use strict"
/**
 * 
 * @param {*} currentValue 
 * @param {*} increment 
  * @returns {Accumulator} constructor function
 */
function Accumulator(currentValue,increment){
       this.currentValue=currentValue;
       this.increment=increment;
      }
       /**
        * 
        * @returns current values+ increment
        */
        Accumulator.prototype.accumulate=function(){
         return this.currentValue+=this.increment;
       }
       /**
        * 
        * @returns the current values
        */
        Accumulator.prototype.report=function(){
          return this.currentValue;   
       }

