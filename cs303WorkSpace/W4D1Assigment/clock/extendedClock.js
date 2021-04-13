const{Clock}=require("./clock")
class ExtendedClock extends Clock{
    constructor({ template },stick=4000){
        super({ template })
        this.stick=stick;
    }
    start() {
        this.render();
        this.timer = setInterval(() => {this.render()
          
        }, this.stick);
      }

}
let clock =new ExtendedClock({template: 'h:m:s'},4000)
 clock.start()