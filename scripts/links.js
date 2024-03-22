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
    prophetss.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let room = document.createElement('section');
        let h2 = document.createElement('h2');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let portrait = document.createElement('url');

        //    let years = document.createElement('p');
        //    let hijos = document.createElement('p');

        // Build the h2 content 
        h2.textContent = `Learning Activities JS ${prophets.lastname}`;

        // Build the list
        li.textContent = `${prophets.name}`;
        portrait.setAttribute('src', lesson.links);
        //    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        //   portrait.setAttribute('loading', 'lazy');
        //    portrait.setAttribute('width', '340');
        //    portrait.setAttribute('height', '440');


        // Append the section(card) with the created elements
        link.appendChild(room);
        link.appendChild(h2);
        link.appendChild(ul);
        link.appendChild(li);
        link.appendChild(portrait);
        //    card.appendChild(hijos);

        enlaces.appendChild(room);
    }); // end of arrow function and forEach loop
}


getLinks();