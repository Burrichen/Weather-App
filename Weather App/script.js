let weather = {
   apiKey : "c2e3ccd321144ff88c9531f1a4e20737",
   fetchWeather: function (city) {
      fetch(
         "https://api.openweathermap.org/data/2.5/weather?q="
          + city
          + "&units=metric&appid="
          + this.apiKey
      )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));
   },
   displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, feels_like, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
         "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".feels").innerText =
         "Feels like: " + feels_like + "°C";
      document.querySelector(".humidity").innerText =
         "Humidity: " + humidity + "%";   
      document.querySelector(".wind").innerText =   
         "Wind speed: " + speed + " km/h";
         document.querySelector(".weather").classList.remove("loading");
/*          document.body.style.backgroundImage = "url"('THIS URL NEEDS TO BE MANUALLY CHOSEN. I CANT FIND A WEBSITE THAT HAS FREE IMAGES OF EACH CITIY') */
   },
   search: function () {
      this.fetchWeather (document.querySelector(".search-bar").value);
   }
};

document
.querySelector(".search button")
.addEventListener("click", function () {
   weather.search();
});

document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
   if (event.key == "Enter") {
      weather.search();
   }
});

weather.fetchWeather("Exeter");