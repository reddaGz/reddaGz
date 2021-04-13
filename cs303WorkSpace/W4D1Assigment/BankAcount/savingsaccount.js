"use strict";
const { Account } = require("./account");
/**
 * This is Saving account class
 */
class SavingsAccount extends Account{
    /**
     * 
     * @param {Number} interest is interest rate
     * @param {Number} number is saving account number
     */
    constructor(number,interest){
        super(number)
        this.setInterest(interest)////setInterest
    }
    /**
     * 
     * @param {Number} interest is interest rate 
     */
     setInterest(interest){
        this._interest=interest
    }
    /**
     * 
     * @returns {Number} returns interest rate
     */
    getInterest(){
        return this._interest;
    }
    /**
     * add interest amount to saving balance
     */
     addInterest(){
        let interestAmount=(this._balance*this._interest)/100
        this.deposit(interestAmount);
    }
    /**
     * 
     * @returns {String} returns saving account information 
     */
    toString(){
      return "SavingsAccount "+this._number+":"+" balance: "+this._balance +" interest: "+this._interest ;
    }
    endOfMonth(){
        return "Interest added SavingsAccount "+this._number+":"+" balance: "+this._balance+" interest: "+this._interest;
    }
}

exports.SavingsAccount = SavingsAccount;
// let saving =new SavingsAccount(1,10)
// saving.deposit(100)
// saving.addInterest()
// console.log(saving.getBalance())
// console.log(saving.toString())
