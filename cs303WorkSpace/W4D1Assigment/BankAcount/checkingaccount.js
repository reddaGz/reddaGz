"use strict";
const { Account } = require("./account");
class  CheckingAccount extends Account{
    /**
     * 
     * @param {Number} overDraft is minimum balance
     * @param {Number} number is checking account number
     */
    constructor(number,overDraft){
        super(number);
        this.setOverdraft(overDraft);
    }
    /**
     * 
     * @param {Number} overDraft is minimum balance 
     */
     setOverdraft(overDraft){
        this._overDraft=overDraft;
    }
    /**
     * 
     * @returns {Number} return minimum balance
     */
     getOverdraft(){
        return this._overDraft;
    }
    /**
     * 
     * @returns {String } returns checking account information
     */
    toString(){
        return "CheckingAccount "+this._number+ ":"+" balance: "+ this._balance+" overdraft limit: "+this._overDraft
    }
    /**
     * 
     * @param {Number} amount withdraw amounts
     */
     withdraw(amount) {
        if (amount <= -1*this._overDraft) {
            throw new RangeError("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }
    endOfMonth(){
      if(this._balance<=0)
       return "Warning, low balance CheckingAccount "+this._number+":"+ "balance: "+this._balance+" overdraft limit: " +this._overDraft;  
    return super.endOfMonth();
    }
    
}

exports.CheckingAccount = CheckingAccount;
