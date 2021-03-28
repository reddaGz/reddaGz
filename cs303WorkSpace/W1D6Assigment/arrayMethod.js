"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}
function doubleAges(arr){
 return arr.map((obj)=>{
    let double={};
    double.name=obj.name
    double.age=obj.age*2
    return double;
 })
}
// function double(obj){
//    let res={};
//     res.name=obj.name
//     res.age=obj.age*2
//     return res;
// }

function filterEven(arr){
    let evenArr=arr.filter(n=>n%2===0)
    return evenArr;
}

function filterOver10(arr) {
    let over10=arr.filter((obj)=>obj.age>10)
    return over10;
}

function findEvenNum(arr){
return arr.find((n)=>n%2===0)
}

function findEvenAge(arr){
    return arr.find((obj)=>obj.age%2===0)
}

function includesEvenNum(arr){
    for(let n of arr){
        if(n%2===0)
        return true;
    }
    return false;
}

function includesEvenAge(arr){
    for(let obj of arr){
        if(obj.age%2===0)
        return true;
    }
    return false;
}