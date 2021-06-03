
window.onload=function(){
    newUser()
    document.getElementById("refeshBtn").onclick=function(){
        newUser(document.getElementById("number-user").value);
    } 
}
function newUser(n=1){
    const employeeDiv = document.getElementById('employee-list');
    employeeDiv.innerHTML = '';
     const { from } = rxjs;
     from(fetchUser('https://randomuser.me/api?results='+n))
     .subscribe(obj => {
         obj.results.forEach(user => {
             console.log(user)
             let template = `     
                 <div class="col">
                     <img src="${user.picture.large}" />
                 </div>
                 <div class="col">
                     <h3>${user.name.first} ${user.name.last}</h3>
                     <p>Location</p>
                     <p>City: ${user.location.city}</p>
                     <p>Country: ${user.location.country}</p>
                     <p>State: ${user.location.state}</p>
                     <p>Street: ${user.location.street.number+" "+user.location.street.name}</p>
                 </div>     
             `;
             const div = document.createElement('div');
             div.classList = 'row border-top';
             div.innerHTML = template;
             employeeDiv.appendChild(div);
         })
     });
     async function fetchUser(url){
     let result=await fetch(url)
     let json= await result.json();
     return json;
     }
}
