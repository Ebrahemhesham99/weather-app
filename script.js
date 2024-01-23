const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const ApiKey = "f708be3358c9bb5cb66734c0eda918fc";
const ApiURI = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city){
    const response = await fetch(ApiURI + city + `&appid=${ApiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Rain"){
        weatherIcon.src="images/rainy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/sunny.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/Mist.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src="images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

checkWeather();