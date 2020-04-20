window.addEventListener("load", () => {
  const currentLocation = document.querySelector("#location");
  const currentCountry = document.querySelector("#country");
  const temperatureDegree = document.querySelector(".temperature");
  const temperatureSummary = document.querySelector("#temperature-description");
  const currentIcon = document.querySelector(".icon-weather");
  const degree = document.getElementById("deg");

  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const key = "cb4d6dc72e1f42b1bf2032c8587d1143";
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then(weather)
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }

  function weather(data) {
    // loading !!
    console.log(data);
    document.querySelectorAll(".weather-loading").forEach((b) => {
      b.style.display = "none";
    });

    const {
      country
    } = data.sys;

    currentCountry.innerHTML = country;
    currentLocation.innerHTML = data.name + ",";

    let weather = data.weather;
    weather.map((data) => {
      const {
        main,
        icon
      } = data;

      currentIcon.innerHTML = `<img id="icon" src="./public/img/${icon}.png">`;
      temperatureSummary.innerHTML = main;
    });

    // celsius
    let tempMax = data.main.temp_max;
    let tempMin = data.main.temp_min;
    let tempFull = data.main.temp;
    let celsius = tempFull - 273.15;
    temperatureDegree.innerHTML = Math.floor(celsius);
    document.getElementById('temp-min').innerHTML = Math.floor(tempMin - 273.15) + "&#8451";
    document.getElementById('temp-max').innerHTML = Math.floor(tempMax - 273.15) + "&#8451 " + '-';
    degree.innerHTML = "&#8451";
  }
});