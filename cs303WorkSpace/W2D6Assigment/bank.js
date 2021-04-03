"use strict";
/**
 *
 * @returns{Object} returns bank acount
 */
function bankAcount() {
  const bank = {
    transactionsDB: [],
  };
  return bank;
}
let banks = bankAcount();
banks.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] },
];
banks.getBalance = function (id) {
  const customer = banks.getCustomer(id);
  let balance = 0;
  for (const trans of customer.customerTransactions) {
    balance += trans;
  }
  return balance;
};
banks.getCustomer = function (id) {
  const customer = banks.transactionsDB.find(
    (customer) => customer.customerId === id
  );
  return customer;
};
banks.debit = function (id, amount) {
  let currentBalance = banks.getBalance(id);
  if (amount < 0) return "Invalid input";
  if (currentBalance < amount) return "insufficient balance";
  else{
      banks.saveTransactions(id,-amount)
      return "successfully"
  }
};
banks.credit = function (id, amount) {
    if (amount < 0) return "Invalid input";
        banks.saveTransactions(id,amount)
        return "successfully"
  };
banks.saveTransactions=function(id ,amount){
    let customer=banks.getCustomer(id)
    customer.customerTransactions.push(amount)
}
banks.overAllBalance=function(){
    let totalBalance=0
    for(let cust of banks.transactionsDB){
        totalBalance+=cust.customerTransactions.reduce((sum,bal)=>sum+bal,0)
    }
    return totalBalance;
}
console.log(banks.transactionsDB);
console.log(banks.getCustomer(2));
console.log(banks.getBalance(2));
console.log(banks.overAllBalance());
