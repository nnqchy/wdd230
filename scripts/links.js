const baseURL = "https://nnqchy.github.io/wdd230/";
const linksURL = "https://nnqchy.github.io/wdd230/data/links.json";
const cards = document.querySelector('#lessons');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.links);
}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // Create elements to add to the div.cards element
        let clase = document.createElement('p');
        //    let years = document.createElement('p');
        //    let hijos = document.createElement('p');
        //    let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        clase.textContent = `${lesson.title}`;
        //    years.textContent = `${prophet.length} years of service`;
        //    hijos.textContent = `Children: ${prophet.numofchildren}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', lesson.url);
        //    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        //   portrait.setAttribute('loading', 'lazy');
        //    portrait.setAttribute('width', '340');
        //    portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(clase);
        card.appendChild(portrait);
        //    card.appendChild(years);
        //    card.appendChild(hijos);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}


getLinks();