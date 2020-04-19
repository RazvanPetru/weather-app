window.addEventListener("load", () => {
  const currentLocation = document.querySelector("#location");
  const currentCountry = document.querySelector("#country");
  const temperatureDegree = document.querySelector(".temperature");
  const temperatureSummary = document.querySelector("#temperature-description");
  const currentIcon = document.querySelector(".icon-weather");
  const degree = document.querySelector("#deg");

  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const key = "cb4d6dc72e1f42b1bf2032c8587d1143";
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

      // http://openweathermap.org/img/w/04d.png
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // loading !!
          document.querySelectorAll(".weather-loading").forEach((b) => {
            b.style.display = "none";
          });

          const { country } = data.sys;
          currentCountry.innerHTML = country;
          currentLocation.innerHTML = data.name + ",";

          let weather = data.weather;
          weather.forEach((data) => {
            const { description, icon } = data;

            currentIcon.innerHTML = `<img id="icon" src="http://openweathermap.org/img/w/${icon}.png">`;
            temperatureSummary.innerHTML = description;
          });

          // celsius
          let temp = data.main.temp;
          let celsius = temp - 273.15;
          temperatureDegree.innerHTML = Math.floor(celsius);
          degree.innerHTML = "&#8451";
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }
});

// var for checkbox toggle and search bar
const checkbox = document.getElementById("checkbox");
const searchDesc = document.getElementById("description");
const addLocation = document.getElementById("current-location");
const deg = document.getElementById("deg");
const footerContent = document.getElementById("footer-content");
const weatherContainer = document.getElementById("header__weather");
const dailyContainer = document.querySelectorAll(".daily__weather");
const otherLocations = document.getElementById("other-locations");

//search bar var
const searchBar = document.getElementById("search-bar");
const searchInput = document.getElementById("search");
const closeSearch = document.getElementById("close-search");
// hide the search bar from main page
closeSearch.style.display = "none";
searchBar.style.display = "none";

// checkbox for changing the color of the theme
const darkMode = localStorage.getItem("darkMode");

function changeTheme() {
  checkbox.addEventListener("change", () => {
    //body black color
    document.body.classList.toggle("dark");

    searchDesc.classList.toggle("dark");

    addLocation.classList.toggle("dark");

    deg.classList.toggle("black");

    footerContent.classList.toggle("black");

    searchInput.style.color = "black";

    document.querySelectorAll("#header__weather").forEach((b) => {
      b.classList.toggle("white");
    });

    localStorage.getItem("darkMode");
  });
}

// Btn for adding more locations

function addLocations() {
  let addLocations = document.getElementById("add-locations");
  addLocations.addEventListener("click", () => {
    weatherContainer.style.display = "none";
    addLocation.innerHTML = "Add new location";
    // add the search bar
    searchBar.style.display = "block";
    closeSearch.style.display = "block";

    otherLocations.style.display = "none";

    addLocations.style.display = "none";

    searchDesc.style.display = "none";

    closeSearch.addEventListener("click", () => {
      window.history.go(0);
    });
  });
}

function weatherDetails() {
  let addLocations = document.getElementById("add-locations");
  weatherContainer.addEventListener("click", () => {
    addLocations.style.display = "none";
    otherLocations.style.display = "none";

    dailyContainer.forEach((b) => {
      b.style.display = "block";
    });

    searchDesc.style.display = "none";

    closeSearch.style.display = "block";

    closeSearch.addEventListener("click", () => {
      window.history.go(0);
    });
  });
}

changeTheme();
addLocations();
weatherDetails();
