const cityInput = document.getElementById('city-input')
const searchBtn = document.getElementById('search-btn')

// weather
const headerInfo = document.getElementById('header-info')
const cityName = document.getElementById('city')
const humidityValue = document.getElementById('humidity')
const windValue = document.getElementById('wind')
const temperatureValue = document.getElementById('temperature-value')
const forecastContainer = document.getElementById('forecast-container')


const APIKey = 'de863ac984adfee2df49a6869122353b'

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() != '') {
        updateWeatherForecast(cityInput.value)
        cityInput.value = ''
        cityInput.blur()
    }
})

cityInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && cityInput.value.trim() != '') {
        updateWeatherForecast(cityInput.value)
        cityInput.blur()
    }
})

function getWeatherIcon(id) {
    if (id <= 232) return 'thunderstorm.png';
    if (id <= 321) return 'drizzle.png';
    if (id <= 531) return 'rain.png';
    if (id <= 781) return 'atmosphere.png';
    if (id <= 800) return 'clear.png';
    else return 'clouds.png';
}

function getCurrentDate() {
    const dateNow = new Date();
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    }

    return dateNow.toLocaleDateString('en-GB', options)
}

function updateWeatherForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + ',PH&appid=' + APIKey + '&units=metric')
        .then(res => res.json())
        .then(weatherData => {
            console.log(weatherData);

            if (weatherData.cod !== '200') {
                showErrorImage(city);
                return;
            }
            temperatureValue.innerHTML = '';
            cityName.innerHTML = '';
            humidityValue.innerHTML = '';
            windValue.innerHTML = '';
            forecastContainer.innerHTML = '';

            // weather icon
            const weatherID = weatherData.list[0].weather[0].id;
            const iconFile = getWeatherIcon(weatherID);

            headerInfo.innerHTML = `<h2 class="title mb-1 d-none d-xl-block">Weather</h2>
                            <h4 class="current-date mb-1 mt-xl-0 mt-4">`+ getCurrentDate() +`</h4>
                            <h4 class="condition mb-3 mb-xl-0"> `+  weatherData.list[0].weather[0].main +` </h4>`;

    
            cityName.innerHTML = `<i class='bx bx-map-pin me-3' style="font-size: 30px; line-height: 1;"></i>
                            <h2 class="city m-0" style="line-height: 1;">`+ weatherData.city.name + `</h2>`


            temperatureValue.innerHTML = `<img src="assets/weather/` + iconFile + `" alt="" class="img-fluid pe-xl-4"
                                style="width: 140px;">
                            <div
                                class="temp d-flex flex-row align-items-start align-items-xl-start justify-content-center justify-content-xl-start">
                                <h1 class="temp-value" style="font-size: 70px"> ` + weatherData.list[0].main.temp + `</h1>
                                <h5 class="temp-unit"
                                    style="font-size: 44px; line-height: 1; align-self: flex-start; padding-top: 8px;">
                                    °C</h5>
                            </div>`;

            humidityValue.innerHTML = `<i class='bx bx-droplet me-3' style="font-size: 36px;"></i>
                            <h4 style="margin: 0; line-height: 1;">Humidity:
                                <span>`+ weatherData.list[0].main.humidity + `%</span>
                            </h4>`;

            windValue.innerHTML = ` <i class='bx bx-wind  me-3' style="font-size: 36px;"></i>
                            <h4 class="wind" style="margin: 0; line-height: 1;">Wind: <span>`+ weatherData.list[0].wind.speed + ` km/h</span></h4>`;

            

            const forecastList = weatherData.list.filter(item => item.dt_txt.includes('12:00:00'));
            forecastContainer.innerHTML = '';

            forecastList.forEach(forecast => {
                const date = new Date(forecast.dt_txt);
                const day = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
                const temp = Math.round(forecast.main.temp);
                const iconId = forecast.weather[0].id;
                const iconFile = getWeatherIcon(iconId);

                forecastContainer.innerHTML += `
        <div class="card-forecast d-flex flex-column justify-content-center align-items-center"
            style="width: 155px; height: 209px; border-radius: 20px; background: rgb(255, 255, 255, 0.1); gap: 6px; padding: 10px">
            <h5 class="forecast-date">` + day + `</h5>
            <img src="assets/weather/` + iconFile + `" alt="" class="condition-img" style="width: 85px;">
            <h3 style="font-size: 26px; margin: 0;">`+ temp + ` °C</h3>
        </div>`;
            });
        })
}

function showErrorImage(city = '') {
    cityName.innerHTML = '';
    temperatureValue.innerHTML = '';
    humidityValue.innerHTML = '';
    windValue.innerHTML = '';
    forecastContainer.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center w-100" style="min-height: 400px;">
            <i class='bx bx-search-alt' style="font-size: 180px; opacity: 0.7;"></i>
            <p class="text-center mt-3 text-light">No forecast data found for "<strong>`+ city +`</strong>".</p>
        </div>
    `;
}


updateWeatherForecast('Batangas');





