window.addEventListener("load", () => {
  let long;
  let lat;
  const currentLocation = document.querySelector("#location-timezone");
  const temperatureDegree = document.querySelector(".temperature");
  const temperatureSummary = document.querySelector("#temperature-description");
  const degree = document.querySelector('#deg');
  const loading = document.querySelector('.weather-loading');


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
          console.log(data);
          const {
            temperature,
            summary,
            icon
          } = data.currently;
          // celsius
          let celsius = (temperature - 32) * (5 / 9);
          // DOM elements
          loading.style.display = 'none';
          currentLocation.textContent = data.timezone;
          temperatureDegree.textContent = Math.floor(celsius);
          degree.innerHTML = '&#8451';
          temperatureSummary.textContent = summary;

          setIcons(icon, document.querySelector('#icon'));
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });

    function setIcons(icon, iconID) {
      const skycons = new Skycons({
        color: 'white'
      });
      const currentIcon = icon.replace(/-/g, '_').toUpperCase();
      skycons.play();
      return skycons.set(iconID, Skycons[currentIcon]);
    }

  }
});