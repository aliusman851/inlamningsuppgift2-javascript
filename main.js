"use strict";
let inputvalue = document.querySelector(".input");
let button = document.querySelector(".btn ");
let currentweather = document.querySelector(".title");
let topattraction = document.querySelector(".title1");
let border = document.querySelector(".weather");
let attractionborder = document.querySelector(".cards");
let cityname = document.querySelector(".name");
let writetemperture = document.querySelector(".tem");
let writecondition = document.querySelector(".con");

let temperture = document.querySelector(".temperture");
let condition = document.querySelector(".condition");
const cb = document.querySelector('#weather');
        
button.addEventListener('click', () => {


     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value +
     '&appid=a89ac303d22fef22631095641fa4dcf1')
        
        .then(Response => Response.json())
        .then(data => {
            currentweather.innerHTML ='Current Weather';
            border.setAttribute("style", "border: solid;");
            let nameofcity = data["name"];
            
            let currenttem = data["main"]["temp"];
            let keltocel = currenttem-273.15;
            let currentcond = data["weather"][0]["main"];
            
            cityname.innerHTML = nameofcity;
             writetemperture.innerHTML = 'Temperture';
            temperture.innerHTML = keltocel;
             writecondition.innerHTML ='Condition';
            condition.innerHTML = currentcond;
            
                
            
            

        })
        
       


        


   
});
button.addEventListener('click', () => {
    
    topattraction.innerHTML ='Top Attraction';
    attractionborder.setAttribute("style", "border: solid;");
    
    
});