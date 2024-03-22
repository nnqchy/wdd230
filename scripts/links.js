const baseURL = "https://nnqchy.github.io/wdd230/";
const linksURL = "https://nnqchy.github.io/wdd230/data/links.json";
const enlaces = document.querySelector('#enlaces');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.prophets);
    displayLinks(data.prophets);
}

const displayLinks = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element

        let h2 = document.createElement('h2');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let portrait = document.createElement('url');

        //    let years = document.createElement('p');
        //    let hijos = document.createElement('p');

        // Build the h2 content 
        h2.textContent = `Learning Activities JS ${prophet.lastname}`;


        // Build the list
        li.textContent = `${prophet.name}`;
        // portrait.setAttribute('src', lesson.links);
        //    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        //   portrait.setAttribute('loading', 'lazy');
        //    portrait.setAttribute('width', '340');
        //    portrait.setAttribute('height', '440');


        // Append the section(card) with the created elements
        ul.appendChild(h2);
        ul.appendChild(ul);
        ul.appendChild(li);
        //link.appendChild(portrait);
        //    card.appendChild(hijos);

        enlaces.appendChild(link);
    }); // end of arrow function and forEach loop
}


getLinks();