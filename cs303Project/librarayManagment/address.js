/**
   * Address class
   */
 class Address {
    /**
     *
     * @param {String} street is street;
     * @param {String} city is city;
     * @param {String} state is state;
     * @param {Number} zip is zip;
     */
    constructor(street, city, state, zip) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.zip = zip;
    }
    setStreet(street) {
      this.street = street;
    }
    setCity(city) {
      this.city = city;
    }
    setState(state) {
      this.state = state;
    }
    setZip(zip) {
      this.zip = zip;
    }
    getStreet() {
      return this.street;
    }
    getCity() {
      return this.city;
    }
    getState() {
      return this.state;
    }
    getZip() {
      return this.zip;
    }
    toString(){
      return "Street :"+this.getStreet()  
    }
  }
  
