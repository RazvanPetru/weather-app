import forecast from "./forecast";

// styles SASS
import "../styles/main.scss";

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
    document.querySelectorAll(".weather-loading").forEach((b) => {
      b.style.display = "none";
    });

    const {
      country
    } = data.sys;

    currentCountry.innerHTML = country;
    currentLocation.innerHTML = data.name + "," + " ";

    let weather = data.weather;
    weather.map((data) => {
      const {
        main,
        icon
      } = data;

      currentIcon.innerHTML = `<img id="icon" src="./src/img/${icon}.png">`;
      temperatureSummary.innerHTML = main;
    });

    // celsius
    let tempMax = data.main.temp_max;
    let tempMin = data.main.temp_min;
    let tempFull = data.main.temp;
    let celsius = tempFull - 273.15;
    temperatureDegree.innerHTML = Math.floor(celsius);
    document.getElementById("temp-min").innerHTML =
      Math.floor(tempMin - 273.15) + "&#8451";
    document.getElementById("temp-max").innerHTML =
      Math.floor(tempMax - 273.15) + "&#8451 " + "-";
    degree.innerHTML = "&#8451";
  }
});

function theme() {
  var themeSwitch = document.getElementById("checkbox");
  if (themeSwitch) {
    initTheme(); // on page load, if user has already selected a specific theme -> apply it

    themeSwitch.addEventListener("change", function (event) {
      resetTheme(); // update color theme
    });

    function initTheme() {
      var darkThemeSelected =
        localStorage.getItem("themeSwitch") !== null &&
        localStorage.getItem("themeSwitch") === "dark";
      // update checkbox
      themeSwitch.checked = darkThemeSelected;
      // update body data-theme attribute
      darkThemeSelected
        ?
        document.body.setAttribute("data-theme", "dark") :
        document.body.removeAttribute("data-theme");
    }

    function resetTheme() {
      if (themeSwitch.checked) {
        // dark theme has been selected
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("themeSwitch", "dark"); // save theme selection
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("themeSwitch"); // reset theme selection
      }
    }
  }
}

theme();