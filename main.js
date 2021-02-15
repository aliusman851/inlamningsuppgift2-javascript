"use strict";
let inputvalue = document.querySelector(".input");
let button = document.querySelector(".btn ");
let currentweather = document.querySelector(".title");
let topattraction = document.querySelector(".title1");
let border = document.querySelector(".weather");
let attractionborder = document.querySelector(".card1");
let attractionborder2 = document.querySelector(".card2");
let attractionborder3 = document.querySelector(".card3");
let cityname = document.querySelector(".name");
let writetemperture = document.querySelector(".tem");
let writecondition = document.querySelector(".con");
let temperture = document.querySelector(".temperture");
let condition = document.querySelector(".condition");



/*
function checkbox(){
    let checkBox = document.getElementById("weather");
    const text = serverresponse,
  if (checkBox.checked != true){
    text.style.display = async();
  } else {
     text.style.display = "none";
  }
}

*/
 button.addEventListener('click', async () => {
    let weathercheckbox = document.getElementById('weather');
    if(weathercheckbox.checked){
        
    try{
    

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
          
            
            } else{
                alert("city name is not valid");
            }
        }catch{
            alert("server error")
        }
    }
            else {
              style.display = "none";
            }
        } );
           
        
    
    
    
    

button.addEventListener('click', async() => {
    
     let today = new Date();
     let date = today.getFullYear()+'0'+(today.getMonth()+1)+''+today.getDate();
     const CLIENT_ID = "H3TXBYEDVD2ETUGDV2E0HY5GFOXMO1JXY13CX51TP12B2ZA2";
     const CLIENT_SECRET = "JENIKXJM3KFBX2NMGFBRQKCOVSSKLURXCKV45JHTEL4XCP3J";

     const serverresponse = await fetch('https://api.foursquare.com/v2/venues/explore?cat=topPicks&near='+inputvalue.value+'&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&v='+ date +'&limit=10')
   const data = await serverresponse.json();
   let place = data.response.groups[0].items[0].venue.name;
   const adress = data.response.groups[0].items[0].venue.location.address;
   const photos = data.response.groups[0].items[0].venue.categories[0].icon.prefix +'100' + '.png';
   
   let place2 = data.response.groups[0].items[1].venue.name;
   const adress2 = data.response.groups[0].items[1].venue.location.address;
   const photos2 = data.response.groups[0].items[1].venue.categories[0].icon.prefix +'100' + '.png';

   let place3 = data.response.groups[0].items[2].venue.name;
   const adress3 = data.response.groups[0].items[2].venue.location.address;
   const photos3 = data.response.groups[0].items[2].venue.categories[0].icon.prefix +'64' + '.png';
    //.then(response => response.json())
   // .then(result => console.log(result));
   topattraction.innerHTML = 'Top Attraction'
   attractionborder.setAttribute("style", "border: solid;")
   attractionborder2.setAttribute("style", "border: solid;")
   attractionborder3.setAttribute("style", "border: solid;")

let placename = document.querySelector(".attractionname1");
let adressheading = document.querySelector(".adressheading");
let attractionadress1 = document.querySelector(".adress");
placename.innerHTML = place;
adressheading.innerHTML = 'Address:'
attractionadress1.innerHTML = adress;
let attractionimage = document.querySelector(".attraction-image");
attractionimage.src = photos;

let placename2 = document.querySelector(".attractionname2");
let adressheading2 = document.querySelector(".adressheading2");
let attractionadress2 = document.querySelector(".adress2");
placename2.innerHTML = place2;
adressheading2.innerHTML = 'Address:'
attractionadress2.innerHTML = adress2;
let attractionimage2 = document.querySelector(".attraction-image2");
attractionimage2.src = photos2;


let placename3 = document.querySelector(".attractionname3");
let adressheading3 = document.querySelector(".adressheading3");
let attractionadress3 = document.querySelector(".adress3");
placename3.innerHTML = place3;
adressheading3.innerHTML = 'Address:'
attractionadress3.innerHTML = adress3;
let attractionimage3 = document.querySelector(".attraction-image3");
attractionimage3.src = photos3;
    });
    
    /*
let resturantname = response.name;
foodpoint1.innerHTML=resturantname;
    */
   
   

