"use strict";
/**
 *  * @returns {Calculator} constructor function
 */
function Calculator(){
    /**
     * 
     * @returns{Number} sum;
     */
    this.sum=function(){
       return this.a+this.b;
    };
    /**
     * 
     * @returns {Number} multiplication;
     */
    this.mul=function(){
        return this.a*this.b;
    }
    /**
     * 
     * @returns {Number} subtraction;
     */
    this.sub=function(){
        return this.a-this.b
    }
    /**
     * 
     * @returns {Number} division;
     */
    this.div=function(){
        return this.a/this.b;
    }
};  

