const apiKey = "c5fe820174968e50db2b9db5dbcf84e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "weather-app-img/images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
         weatherIcon.src = "weather-app-img/images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
         weatherIcon.src = "weather-app-img/images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);
})
