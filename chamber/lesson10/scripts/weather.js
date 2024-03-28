//select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&&units=imperial&APPID=32b3c0930f8c09b95ee90430ea66f307';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg:F`;
    const iconsrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('atl', desc);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('src', iconsrc);

    captionDesc.textContent = `${desc}`;
}



apiFetch();