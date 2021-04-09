"use strict";
/**
 *  * @returns {Calculator} constructor function
 */
function Calculator(){
    
}
Calculator.prototype.setValue=function(a,b){
    this.a=a;
    this.b=b;
}
    /**
     * 
     * @returns{Number} sum;
     */
     Calculator.prototype.sum=function(){
       return this.a+this.b;
    };
    /**
     * 
     * @returns {Number} multiplication;
     */
     Calculator.prototype.mul=function(){
        return this.a*this.b;
    }
    /**
     * 
     * @returns {Number} subtraction;
     */
     Calculator.prototype.sub=function(){
        return this.a-this.b
    }
    /**
     * 
     * @returns {Number} division;
     */
     Calculator.prototype.div=function(){
        return this.a/this.b;
    }

    