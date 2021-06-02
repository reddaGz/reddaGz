window.onload = function () {
  fetchUser1("https://randomuser.me/api");
  fetchUser2("https://randomuser.me/api");
  fetchUser3("https://randomuser.me/api");
  document.getElementById("ref-btn").onclick = function () {
    fetchUser1("https://randomuser.me/api");
    fetchUser2("https://randomuser.me/api");
    fetchUser3("https://randomuser.me/api");
  };
};

async function fetchUser1(url) {
  let result1 = await fetch(url);
  let jsonObj = await result1.json();
  console.log(jsonObj)
  console.log(jsonObj.results[0].phone)
  console.log(jsonObj.results[0].email)
  let firstName = jsonObj.results[0].name.first;
  let lastName = jsonObj.results[0].name.last;
  let profImg = jsonObj.results[0].picture.large;
  let phoneNum=jsonObj.results[0].phone;
  let email=jsonObj.results[0].email;
  document.getElementById("name1").innerHTML = firstName + " " + lastName;
  document.getElementById("profImg1").src = profImg;
  document.getElementById("phone-num1").innerHTML=phoneNum;
  document.getElementById("email1").innerHTML=email;
}
async function fetchUser2(url) {
  let result1 = await fetch(url);
  let jsonObj = await result1.json();
  let firstName = jsonObj.results[0].name.first;
  let lastName = jsonObj.results[0].name.last;
  let profImg = jsonObj.results[0].picture.large;
  let phoneNum=jsonObj.results[0].phone;
  let email=jsonObj.results[0].email;
  document.getElementById("name2").innerHTML = firstName + " " + lastName;
  document.getElementById("profImg2").src = profImg;
  document.getElementById("phone-num2").innerHTML=phoneNum;
  document.getElementById("email2").innerHTML=email;
}
async function fetchUser3(url) {
  let result1 = await fetch(url);
  let jsonObj = await result1.json();
  let firstName = jsonObj.results[0].name.first;
  let lastName = jsonObj.results[0].name.last;
  let profImg = jsonObj.results[0].picture.large;
  let phoneNum=jsonObj.results[0].phone;
  let email=jsonObj.results[0].email;
  document.getElementById("name3").innerHTML = firstName + " " + lastName;
  document.getElementById("profImg3").src = profImg;
  document.getElementById("phone-num3").innerHTML=phoneNum;
  document.getElementById("email3").innerHTML=email;
}
