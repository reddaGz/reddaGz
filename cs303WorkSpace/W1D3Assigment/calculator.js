"use strict";

function Calculator(){
    this.sum=function(){
       return this.a+this.b;
    };
    this.mul=function(){
        return this.a*this.b;
    }
};  // implement this

// let calc = new Calculator();
//         calc.a = 20;
//         calc.b = 30;
//         console.log(calc.sum())
/* global assert Calculator */

// describe("calculator from constructor function", function () {
//     //let calc;  
//     // before(function () {
//         let calc = new Calculator();
//         calc.a = 20;
//         calc.b = 30;
//         it("when 2 and 3 are entered, the sum is 50", function () {
//             assert.strictEqual(calc.a, 20);
//             assert.strictEqual(calc.b, 30);
//             assert.strictEqual(calc.sum(), 50);
//         });
    
//         it("when 20 and 30 are entered, the product is 600", function () {
//             assert.strictEqual(calc.a, 20);
//             assert.strictEqual(calc.b, 30);
//             assert.strictEqual(calc.mul(), 600);
//         });
//     //});

// });
function findTitle(libraryBook){
    let title=""
    let sortTitle=libraryBook.sort((a,b)=>{
    if(a.title>b.title)
    return 1
    else if(a.title<b.title)
    return -1
    else
    return 0
     
     })
    for(let book of sortTitle){
    title+=book.title+"\n";
     }
    return title;
    }