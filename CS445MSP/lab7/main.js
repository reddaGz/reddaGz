window.onload = function () {
  fetchUser("https://randomuser.me/api?results=3");
  document.getElementById("ref-btn").onclick = function () {
    fetchUser("https://randomuser.me/api/?results=3");
  };
};
async function fetchUser(url) {
  let result1 = await fetch(url);
  let jsonObj = await result1.json();
  for(let i=0;i<jsonObj.results.length;i++){
     let name="name"+i;
     let proImg="profImg"+i;
     let phonNum="phone-num"+i;
     let email="email"+i;
    document.getElementById(name).innerHTML = jsonObj.results[i].name.first; + " " + jsonObj.results[i].name.last;;
    document.getElementById(proImg).src = jsonObj.results[i].picture.large;;
    document.getElementById(phonNum).innerHTML=jsonObj.results[i].phone;;
    document.getElementById(email).innerHTML=jsonObj.results[i].email;;
  }
  
}
