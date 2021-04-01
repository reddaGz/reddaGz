"use strict";
/* global require */
// const recurse = require("./recursion.js");
// const assert = require("assert");
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
 
describe("recursion tests", function () {
    it("tests summing by recursion", function () {
        assert.deepEqual(sumTo(5), 15);
        assert.deepEqual(sumTo(10), 55);
    });
    it("tests factorial", function () {
        assert.deepEqual(factorial(5), 120);
        assert.deepEqual(factorial(10), 3628800);
    });
 
    it("tests fibonacci 10", function () {
        assert.deepEqual(fibonacci(10), 55);
    });
    it("tests fibonacci 30", function () {
        assert.deepEqual(fibonacci(30), 832040);
    });
    it("recursive version prints 1 2 3 4 ", function () {
        assert.deepEqual(outputList(list), "1 2 3 4 ");
    });
    it("iterative version prints 1 2 3 4 to", function () {
        assert.deepEqual(outputListLoop(list), "1 2 3 4 ");
    }); 
 
    it("recursive version prints 4 3 2 1", function () {
        assert.deepEqual(recurse.reverseList(list), "4 3 2 1 ");
    });    
    it("loop version prints 4 3 2 1 ", function () {
        assert.deepEqual(reverseListLoop(list), "4 3 2 1 ");
    });    
 
});