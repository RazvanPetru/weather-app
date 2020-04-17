window.addEventListener("load", () => {
  const currentLocation = document.querySelector("#location-timezone");
  const temperatureDegree = document.querySelector(".temperature");
  const temperatureSummary = document.querySelector("#temperature-description");
  const degree = document.querySelector("#deg");

  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/0a40a38eaba4487de20bf162096c6113/${lat},${long}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // data from API
          const {
            temperature,
            summary,
            icon
          } = data.currently;
          console.log(data);
          // celsius
          let celsius = (temperature - 32) * (5 / 9);
          // DOM elements
          document.querySelectorAll(".weather-loading").forEach((b) => {
            b.style.display = "none";
          });
          // current location from API
          currentLocation.textContent = data.timezone;
          // temperature from API in CELSIUS
          temperatureDegree.textContent = Math.floor(celsius);
          // celsius symbol
          degree.innerHTML = "&#8451";
          // summary from API
          temperatureSummary.textContent = summary;
          // setting icons from SkyCons

          setIcons(icon, document.querySelector("#icon"));
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }

  // darkSky icons
  function setIcons(icon, iconID) {
    const skycons = new Skycons({
      color: "#7768e5",
    });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});

// var for checkbox toggle and search bar
const checkbox = document.getElementById("checkbox");
const searchDesc = document.getElementById("description");
const currentLocation = document.getElementById("current-location");
const deg = document.getElementById("deg");
const footerContent = document.getElementById("footer-content");
const weatherContainer = document.getElementById('header__weather');
const otherLocations = document.getElementById('other-locations');

//search bar var
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search');
const closeSearch = document.getElementById('close-search');
// hide the search bar from main page
closeSearch.style.display = 'none';
searchBar.style.display = 'none';

// checkbox for changing the color of the theme

checkbox.addEventListener("change", () => {
  //body black color
  document.body.classList.toggle("dark");

  searchDesc.classList.toggle("dark");

  currentLocation.classList.toggle("dark");

  deg.classList.toggle("black");

  footerContent.classList.toggle("black");

  searchInput.style.color = 'black';

  document.querySelectorAll("#header__weather").forEach((b) => {
    b.classList.toggle("white");
  });

});

// Btn for adding more locations



function addLocations() {
  let addLocations = document.getElementById('add-locations');
  addLocations.addEventListener('click', () => {
    weatherContainer.style.display = 'none';
    currentLocation.innerHTML = 'Add new location'
    // add the search bar
    searchBar.style.display = 'block';
    closeSearch.style.display = 'block';

    otherLocations.style.display = 'none';

    addLocations.style.display = 'none';

    searchDesc.style.display = 'none';

    closeSearch.addEventListener('click', () => {
      window.history.go(0);
    })
  })
}

function weatherDetails() {
  let addLocations = document.getElementById('add-locations');
  weatherContainer.addEventListener('click', () => {
    addLocations.style.display = 'none';
    otherLocations.style.display = 'none';

    searchDesc.style.display = 'none';

    closeSearch.style.display = 'block';

    closeSearch.addEventListener('click', () => {
      window.history.go(0);
    })
  })
}



addLocations()
weatherDetails();