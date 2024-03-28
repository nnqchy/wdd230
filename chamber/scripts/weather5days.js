//select HTML elements in the document
const currentTemp5 = document.querySelector('#current-temp5');
const weatherIcon5 = document.querySelector('#weather-icon5');
const captionDesc5 = document.querySelector('#figcaption5');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&APPID=32b3c0930f8c09b95ee90430ea66f307';
const url5days = 'https://api.openweathermap.org/data/2.5/forecast?lat=-38.00691467685785&lon=-57.55110487053055&units=imperial&APPID=32b3c0930f8c09b95ee90430ea66f307';

async function apiFetch() {
    try {
        const response = await fetch(url5days);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// function displayResults(data) {
//     currentTemp5.innerHTML = `${data.main.temp}&deg F`;
//     const iconsrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].description;
//     weatherIcon5.setAttribute('atl', desc);
//     weatherIcon5.setAttribute('loading', 'lazy');
//     weatherIcon5.setAttribute('src', iconsrc);

//     captionDesc5.textContent = `${desc}`;
// }



apiFetch();