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
let foodpoint1 = document.querySelector("attractionname");
const cb = document.querySelector('#weather');

button.addEventListener('click', async () => {
    try {

        const serverresponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value +
        '&appid=a89ac303d22fef22631095641fa4dcf1');
        if (serverresponse.ok) {
            const information = await serverresponse.json();
            
            /* 
             .then(Response => Response.json())
             .then(data => {
                 currentweather.innerHTML ='Current Weather'; */
            border.setAttribute("style", "border: solid;");
            let nameofcity = information.name;

            let currenttem = information["main"]["temp"];
            let keltocel = currenttem - 273.15;
            let currentcond = information["weather"][0]["main"];

            cityname.innerHTML = nameofcity;
            writetemperture.innerHTML = 'Temperture';
            temperture.innerHTML = keltocel;
            writecondition.innerHTML = 'Condition';
            condition.innerHTML = currentcond;
        } else {
            alert("wrong city name ")
        }
    } catch (error) {
        alert("given city name is incorrect")
    }
});

button.addEventListener('click', async() => {
    
    const CLIENT_ID = "H3TXBYEDVD2ETUGDV2E0HY5GFOXMO1JXY13CX51TP12B2ZA2";
    const CLIENT_SECRET = "JENIKXJM3KFBX2NMGFBRQKCOVSSKLURXCKV45JHTEL4XCP3J";
    const serverresponse = await fetch('https://api.foursquare.com/v2/venues/explore?cat=topPicks&near='+inputvalue.value+'&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&v=20210213&limit=10')
   const data = await serverresponse.json();
   let place = data.response.groups[0].items[0].venue.name;
    //.then(response => response.json())
   // .then(result => console.log(result));
   topattraction.innerHTML = 'Top Attraction'
   attractionborder.setAttribute("style", "border: solid;")

let placename = document.querySelector(".attractionname1");
placename.innerHTML = place;

    });
    
    /*
let resturantname = response.name;
foodpoint1.innerHTML=resturantname;
    */
   
   

