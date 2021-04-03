"use strict"
/**
 * 
 */
function pageLoad(){
    let btnAlarm= document.getElementById("go");
    let bodyStyle=document.getElementById("bodyPart");
    btnAlarm.onclick=setAlarm; 
    let mySecCounter;
    /**
     * 
     */
    function setAlarm(){
         let  min = Number(document.getElementById("min").value); 
          let sec=Number(document.getElementById("sec").value);
          if(sec>=60){
             alert("Seconed must be less than 60")
              location.reload();
          }
          mySecCounter = setInterval(alarmCounter,1000);
          /**
           * 
           * @return{};
           */
                function alarmCounter(){
                    if(min===0 && sec===0){
                        stopCounter()
                        clear();
                        bodyStyle.className= "bodyStyle";
                        return;
                    }			
                    else if(sec===0){
                        min--;
                        document.getElementById("sec").value = 59;
                        sec=Number(document.getElementById("sec").value);
                        document.getElementById("min").value = min;	
                    }
                    document.getElementById("sec").value = sec;
                    sec--;	
                    }
             }
             /**
              * 
              */
    function clear(){
            document.getElementById("min").value="";
            document.getElementById("sec").value="";
    }
             
     /**
      * 
      */        
    function stopCounter(){
        clearInterval(mySecCounter);
     }
}
/**
 * 
 */
function init(){
    window.onload = pageLoad; 
}

init();