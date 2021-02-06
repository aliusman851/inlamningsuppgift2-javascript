"user strict";
let inputvalue = document.querySelector(".input");
let button = document.querySelector(".btn ");
let cityname = document.querySelector(".name");

let temperture = document.querySelector(".temperture");
let condition = document.querySelector(".condition");
button.addEventListener('click', () => {
    
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+
'&appid=a89ac303d22fef22631095641fa4dcf1')
.then(Response => Response.json())
.then(data => {
    let nameofcity = data["name"];
    let currenttem = data["main"]["temp"];
    let currentcond = data["weather"][0]["main"];
    cityname.innerHTML = nameofcity;
    temperture.innerHTML=currenttem;
    condition.innerHTML = currentcond;


})
    


});
