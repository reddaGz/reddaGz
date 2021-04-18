/**
 * Person class
 */
 class Person {
    /**
     *
     * @param {String} firstName is first name
     * @param {String} lastName is last name
     * @param {String} phoneNum is phone number
     * @param {Object} dob is date of birth
     * @param {Object} address is address
     */
    constructor(firstName, lastName, phoneNum,dob, address) {
      this.setFirstName(firstName)
      this.setLastName(lastName)
      this.setPhonNum(phoneNum)
      this.setDob(dob)
      this.setAddress(address)
    }
    /**
     *
     * @param {String} firstName set first name
     */
    setFirstName(firstName) {
      this.firstName = firstName;
    }
    setLastName(lastName) {
      this.lastName = lastName;
    }
    setPhonNum(phoneNum) {
      this.phoneNum = phoneNum;
    }
    setDob(dob) {
      this.dob = dob;
    }
    setAddress(address) {
      this.address = address;
    }
    getFirstName() {
      return this.firstName;
    }
    getLastName() {
      return this.lastName;
    }
    getPhonNum() {
      return this.phoneNum;
    }
    getDob() {
      return this.dob;
    }
    getAddress() {
      return this.address;
    }
  }
  // exports.Person = Person;