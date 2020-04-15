window.addEventListener("load", () => {
  let long;
  let lat;
  let currentLocation = document.querySelector("#location-timezone");
  let temperatureDegree = document.querySelector(".temperature");
  let temperatureSummary = document.querySelector("#temperature-description");

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
          const { temperature, summary } = data.currently;

          // celsius
          let celsius = (temperature - 32) * (5 / 9);
          // DOM elements
          currentLocation.textContent = data.timezone;
          temperatureDegree.textContent = Math.floor(celsius);
          temperatureSummary.textContent = summary;
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }
});
