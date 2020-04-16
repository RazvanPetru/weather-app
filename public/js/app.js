window.addEventListener("load", () => {

  const currentLocation = document.querySelector("#location-timezone");
  const temperatureDegree = document.querySelector(".temperature");
  const temperatureSummary = document.querySelector("#temperature-description");
  const degree = document.querySelector('#deg');

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
          // celsius
          let celsius = (temperature - 32) * (5 / 9);
          // DOM elements
          document.querySelectorAll('.weather-loading').forEach(b => {
            b.style.display = 'none';
          });
          // current location from API
          currentLocation.textContent = data.timezone;
          // temperature from API in CELSIUS
          temperatureDegree.textContent = Math.floor(celsius);
          // celsius symbol
          degree.innerHTML = '&#8451';
          // summary from API
          temperatureSummary.textContent = summary;
          // setting icons from SkyCons

          setIcons(icon, document.querySelector('#icon'));
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }

  // darkSky icons
  function setIcons(icon, iconID) {
    const skycons = new Skycons({
      color: '#7768e5'
    });
    const currentIcon = icon.replace(/-/g, '_').toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});

// var for checkbox toggle
const checkbox = document.getElementById('checkbox');
const searchDesc = document.getElementById('description');
const currentLocation = document.getElementById('current-location');
const deg = document.getElementById('deg');
const footerContent = document.getElementById('footer-content');

checkbox.addEventListener('change', () => {
  //body black color
  document.body.classList.toggle('dark');

  searchDesc.classList.toggle('dark');

  currentLocation.classList.toggle('dark');

  deg.classList.toggle('black');

  footerContent.classList.toggle('black');

  document.querySelectorAll('#header__weather').forEach(b => {
    b.classList.toggle('white');
  });
})