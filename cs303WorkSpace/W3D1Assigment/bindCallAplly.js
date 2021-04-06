let prompt=require('prompt-sync')();
/**
 * this is ask password using bind
 */
console.log("\nthis is using bind to solve problem of this \n")
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  /**
 * this is ask password using bind
 */
console.log("\nthis is using call to solve problem of this \n")
function askPassword1(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user1 = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  };
  
  askPassword1.call(user1,user1.loginOk,user1.loginFail);

  /**
 * this is ask password using bind
 */
console.log("\nthis is using apply to solve problem of this \n")
function askPassword2(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user2 = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  };
  
  askPassword2.apply(user2,[user2.loginOk,user2.loginFail]);
/**
 * this is using arrow function to keep the context of this
 */
console.log("\nthis is using bind method to solve problem of this ")
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"], 
    showList() {
    this.students.forEach(function(student) { 
    console.log(this.title + ': ' + student)
    }.bind(group)); }
    }; 
    group.showList();
/**
 * this is using arrow function to keep the context of this
 */
 console.log("\nthis is using arrow function method to solve problem of this ")
    let group1 = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"], 
        showList() {
        this.students.forEach((student)=> { 
        console.log(this.title + ': ' + student)
        }); }
        }; 

        group1.showList();

 
