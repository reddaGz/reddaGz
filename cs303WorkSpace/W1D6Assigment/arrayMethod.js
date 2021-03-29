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

/**
 * reduce
- find sum of numbers
- find average of numbers
- find max of numbers
- find max for ages
- use a chain of map filter reduce to find the average age of people with even number ages
- use a chain of map filter reduce to find the average age of people with odd number ages
 */
// let numArray = [5, 0, 7, 77, -20, 300, 51, 2]
function findSum(arr){
    return arr.reduce((sum,n)=>sum+n,0)
}
// console.log(findSum(numArray))
function findAverage(arr){
    return arr.reduce((sum,n)=>sum+n,0)/arr.length;
}
function findMax(arr){
   return arr.reduce((max,current)=>max>current?max:current,arr[0])
    // return maximum;
}
// console.log(findSum(numArray))
// console.log(findAverage(numArray))
// console.log(findMax(numArray))

// let peopleArray = [
//     {
//      name: "Sam", age: 15 }, 
// { name: "William", age: 6 }, 
// { name: "Lucy", age: 13 }, 
// { name: "Barney", age: 80 }];
function findMaxAge(arr){
    let maxAge=arr.reduce((max,current)=>max>current?max:current,arr[0])
    //let maxAge=arr.reduce((max,current)=>max>current.age?max:current.age,arr[0].age)
    //if we want to return the value only
    return maxAge;
}
// console.log(findMaxAge(peopleArray))

function filterEvenAgeAverage(arr) {
    let len=arr.filter((obj)=>obj.age%2===0).length;
    let result=[]
    let sum=arr.filter((obj)=>obj.age%2===0).reduce((sum,obj)=>sum+obj.age,0);
    result.push(sum)
    let avg=result.map((n)=>n/len)[0];
    return avg
}
function filterOddAgeAverage(arr) {
    let len=arr.filter((obj)=>obj.age%2!==0).length;
    let result=[]
    let sum=arr.filter((obj)=>obj.age%2!==0).reduce((sum,obj)=>sum+obj.age,0);
    result.push(sum)
    let avg=result.map((n)=>n/len)[0];
    return avg
}
// console.log(filterEvenAge(peopleArray))
// console.log(filterOddAge(peopleArray))

