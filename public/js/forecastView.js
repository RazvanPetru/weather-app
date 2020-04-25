window.addEventListener("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const key = "cb4d6dc72e1f42b1bf2032c8587d1143";
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // loading !!
          document.querySelectorAll(".weather-loading").forEach((b) => {
            b.style.display = "none";
          });

          document.querySelector('footer').style.height = '0';

          const element = document.querySelector(".forecast");

          const daily = data.list;

          daily.forEach(data => {
            const date = moment
              .unix(data.dt)
              .utc()
              .format('dddd, Do MMMM, HH:mm');
            const icon = data.weather[0].icon;
            const temp = Math.floor(data.main.temp - 273.15);
            const temp_max = Math.floor(data.main.temp_max - 273.15);
            const temp_min = Math.floor(data.main.temp_min - 273.15);
            const description = data.weather[0].main;

            let markup = `<div class="forecast__container">
                <div class="forecast__container-date">
                  ${date}
                </div>

                <div class="forecast__container-weather forecast">
                  <div class="forecast__temp-icon">
                    <img src="./public/img/${icon}.png" width="60" height="60" />
                  </div>
                  <div class="forecast__temp-details temp">
                    <div class="temp-desc">${description}</div>
                    <div class="temp-details">
                      <div id="temp-max" class="temp-max">${temp_max + "&#8451 " + "-"}</div>
                      <div id="temp-max" class="temp-min">${temp_min + " &#8451"}</div>
                    </div>
                  </div>

                  <div class="forecast__container-temp">
                    <div class="temp">${temp + "&#8451"}</div>
                  </div>

                </div>
              </div>
            </div>`

            element.insertAdjacentHTML('beforeend', markup);
          })
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }
});