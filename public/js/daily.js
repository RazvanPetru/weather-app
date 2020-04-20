// var for checkbox toggle and search bar
const checkbox = document.getElementById("checkbox");
const searchDesc = document.getElementById("description");
const addLocation = document.getElementById("current-location");
const weatherContainer = document.getElementById("header__weather");
const dailyContainer = document.querySelectorAll(".daily__weather");
const otherLocations = document.getElementById("other-locations");

//search bar var
const input = document.getElementById("search");
const searchBar = document.getElementById("search-bar");
const closeSearch = document.getElementById("close-search");
closeSearch.style.display = 'none';

// Btn for adding more locations
function addLocations() {
    let addLocations = document.getElementById("add-locations");
    addLocations.addEventListener("click", () => {
        weatherContainer.style.display = "none";
        addLocation.innerHTML = "Add new location";
        // add the search bar
        searchBar.style.display = "block";
        input.style.display = "block";
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

addLocations();
weatherDetails();