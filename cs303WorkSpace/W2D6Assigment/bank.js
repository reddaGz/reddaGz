"use strict";
/**
 *
 * @returns{Object} returns bank acount
 */
function makeAcount() {
  const transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] },
  ];
  const bank = {}
  bank.getBalance = function (id) {
    const customer = transactionsDB.find(
      (customer) => customer.customerId === id
    );
   return customer.customerTransactions.reduce((sum,item)=>sum+item,0)
  };
  bank.getCustomer = function (id) {
    const customer = transactionsDB.find(
      (customer) => customer.customerId === id
    );
    return customer;
  };
  bank.debit = function (id, amount) {
    let currentBalance = bank.getBalance(id);
    if (amount < 0) return "Invalid input";
    if (currentBalance < amount) return "insufficient balance";
    else{
        bank.saveTransactions(id,-amount)
        return "successfully"
    }
  };
  bank.credit = function (id, amount) {
      if (amount < 0) return "Invalid input";
          bank.saveTransactions(id,amount)
          return "successfully"
    };
  bank.saveTransactions=function(id ,amount){
      let customer=bank.getCustomer(id)
      customer.customerTransactions.push(amount)
  }
  bank.overAllBalance=function(){
      let totalBalance=0
      for(let cust of transactionsDB){
          totalBalance+=cust.customerTransactions.reduce((sum,bal)=>sum+bal,0)
      }
      return totalBalance;
  }
  return bank
}
let banks = makeAcount();

//console.log(banks.transactionsDB);

console.log(banks.debit(1,5)+" debited $5");
console.log(banks.credit(1,50)+" credited $50")
console.log(banks.getCustomer(2));
console.log(banks.getBalance(2));
console.log(banks.overAllBalance());

// console.log(banks.transactionsDB)
