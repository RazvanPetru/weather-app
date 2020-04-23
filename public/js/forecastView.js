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

          const element = document.querySelector(".forecast");

          const daily = data.list;

          console.log(daily);

          // i know is not the best solution
          const markup = `
        <div class="forecast__container">
          <div class="forecast__container-date">
            ${daily[0].dt_txt.substr(0, 10)}
          </div>
          <div class="forecast__container-weather forecast">
            <div class="forecast-icon">
              <img src="./public/img/${
                daily[0].weather[0].icon
              }.png" width="50" height="50" />
            </div>
            <div class="forecast-temp">
              <div class="temp-max" id="temp-max">
              ${Math.floor(daily[0].main.temp_max - 273.15) + "&#8451" + "-"}
            </div>
              <div class="temp-min" id="temp-min">
              ${Math.floor(daily[0].main.temp_min - 273.15) + "&#8451"}
              </div>
            </div>
          </div>
        <div class="forecast-description">
        ${daily[0].weather[0].description}
        </div>
        </div>

        <div class="forecast__container">
          <div class="forecast__container-date">
            ${daily[4].dt_txt.substr(0, 10)}
          </div>
          <div class="forecast__container-weather forecast">
            <div class="forecast-icon">
              <img src="./public/img/${
                daily[4].weather[0].icon
              }.png" width="50" height="50" />
            </div>
            <div class="forecast-temp">
              <div class="temp-max" id="temp-max">
              ${Math.floor(daily[4].main.temp_max - 273.15) + "&#8451" + "-"}
            </div>
              <div class="temp-min" id="temp-min">
              ${Math.floor(daily[4].main.temp_min - 273.15) + "&#8451"}
              </div>
            </div>
          </div>
        <div class="forecast-description">
        ${daily[4].weather[0].description}
        </div>
        </div>

        <div class="forecast__container">
          <div class="forecast__container-date">
            ${daily[15].dt_txt.substr(0, 10)}
          </div>
          <div class="forecast__container-weather forecast">
            <div class="forecast-icon">
              <img src="./public/img/${
                daily[15].weather[0].icon
              }.png" width="50" height="50" />
            </div>
            <div class="forecast-temp">
              <div class="temp-max" id="temp-max">
              ${Math.floor(daily[15].main.temp_max - 273.15) + "&#8451" + "-"}
            </div>
              <div class="temp-min" id="temp-min">
              ${Math.floor(daily[15].main.temp_min - 273.15) + "&#8451"}
              </div>
            </div>
          </div>
        <div class="forecast-description">
        ${daily[15].weather[0].description}
        </div>
        </div>

         <div class="forecast__container">
          <div class="forecast__container-date">
            ${daily[23].dt_txt.substr(0, 10)}
          </div>
          <div class="forecast__container-weather forecast">
            <div class="forecast-icon">
              <img src="./public/img/${
                daily[23].weather[0].icon
              }.png" width="50" height="50" />
            </div>
            <div class="forecast-temp">
              <div class="temp-max" id="temp-max">
              ${Math.floor(daily[23].main.temp_max - 273.15) + "&#8451" + "-"}
            </div>
              <div class="temp-min" id="temp-min">
              ${Math.floor(daily[23].main.temp_min - 273.15) + "&#8451"}
              </div>
            </div>
          </div>
        <div class="forecast-description">
        ${daily[23].weather[0].description}
        </div>
        </div>

        <div class="forecast__container">
          <div class="forecast__container-date">
            ${daily[30].dt_txt.substr(0, 10)}
          </div>
          <div class="forecast__container-weather forecast">
            <div class="forecast-icon">
              <img src="./public/img/${
                daily[30].weather[0].icon
              }.png" width="50" height="50" />
            </div>
            <div class="forecast-temp">
              <div class="temp-max" id="temp-max">
              ${Math.floor(daily[30].main.temp_max - 273.15) + "&#8451" + "-"}
            </div>
              <div class="temp-min" id="temp-min">
                ${Math.floor(daily[30].main.temp_min - 273.15) + "&#8451"}
              </div>
            </div>
          </div>
        <div class="forecast-description">
        ${daily[30].weather[0].description}
        </div>
        </div>
        `;
          element.innerHTML = markup;
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }
});
