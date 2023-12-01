const API_KEY = "ab8ccec4b83c1a2f78252aa527e30708";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}   

async function fetchWeatherDetails(){
    try{
        let city = "Jaipur";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        console.log("Weather data - ", data);

        renderWeatherInfo(data);
    }
    catch(err){
        console.log(err);
    }
}
fetchWeatherDetails();

async function getCustomWeatherDetail(){
    try{
        let lat = 16.633;
        let lon = 18.333;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        console.log("Weather data - ", data);

        renderWeatherInfo(data);
    }
    catch(err){
        console.log(err);
    }
}
getCustomWeatherDetail();




// Grant Access Location
function getLocation(){
    if(navigator.geolocation){
        console.log("Location accessed");
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("No geolocation support...");
    }
}

function showPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let newPara1 = document.createElement('p');
    newPara1.textContent = `Latitude - ${latitude}`;
    document.body.appendChild(newPara1);
    let newPara2 = document.createElement('p');
    newPara2.textContent = `Longitude - ${longitude}`;
    document.body.appendChild(newPara2);
}
getLocation();