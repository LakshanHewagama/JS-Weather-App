
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "f77d91da7dc62ddd6406888ff5eea325";


async function checkWeather(){

    let inpCity = document.getElementById("inp").value;

    const response = await fetch(apiUrl + 'q=' + inpCity + '&appid=' + apiKey + '&units=metric');
    var data = await response.json();
    console.log(data);

    if(response.status == 404){
        document.querySelector(".error").innerHTML = "Invalid city Name";
        document.querySelector(".weather").style.display = "none";

    }else{
        document.querySelector(".error").innerHTML = "";
    }


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    
    if (data.weather[0].main === "Rain") {
        document.querySelector('.weather-icon').src = "images/rain.png";
    }
    else if(data.weather[0].main === "Clear"){
        document.querySelector('.weather-icon').src = "images/clear.png";
    }
    else if(data.weather[0].main === "Clouds"){
        document.querySelector('.weather-icon').src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        document.querySelector('.weather-icon').src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        document.querySelector('.weather-icon').src = "images/mist.png";
    }
    else if(data.weather[0].main === "Snow"){
        document.querySelector('.weather-icon').src = "images/snow.png";
    }
    else if(data.weather[0].main === "Wind"){
        document.querySelector('.weather-icon').src = "images/wind.png";
    }else{

    }

    document.querySelector(".weather").style.display = "block";

    
}


