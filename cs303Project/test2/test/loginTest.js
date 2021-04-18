function loadPage(){
    
    function onclickDisplay(){
        let resultClick=document.getElementById("loginButton")
        resultClick.onclick=display
      }
      function display(){
         let result=document.getElementById("test") 
         result.className= "displayTest";
         let testResult=document.getElementById("id1")
         testResult.className="testDivDisplay";
         let hide=document.getElementById("hidButton")
         hide.className="hideLoginForm1"
      }
      onclickDisplay()
}

window.onload = loadPage;