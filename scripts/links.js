const baseURL = "https://nnqchy.github.io/wdd230/";
const linksURL = "https://nnqchy.github.io/wdd230/data/links.json";
const rooms = document.querySelector('#lessons');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons);
    displayLinks(data.links);
}

const displayLinks = (links) => {
    links.forEach((link) => {
        // Create elements to add to the div.cards element
        let room = document.createElement('section');
        let lista = document.createElement('li');
        let clase = document.createElement('ul');
        let portrait = document.createElement('url');

        //    let years = document.createElement('p');
        //    let hijos = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        clase.textContent = `${link.title}`;
        //    years.textContent = `${prophet.length} years of service`;
        //    hijos.textContent = `Children: ${prophet.numofchildren}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', link.url);
        //    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        //   portrait.setAttribute('loading', 'lazy');
        //    portrait.setAttribute('width', '340');
        //    portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        room.appendChild(room);
        room.appendChild(lista);
        room.appendChild(clase);
        room.appendChild(portrait);
        //    card.appendChild(years);
        //    card.appendChild(hijos);

        rooms.appendChild(room);
    }); // end of arrow function and forEach loop
}

//  <section id="cards">
//<h3>Learning Activities</h3>
//<ul>
//    <li>Home: <a href="#"></a></li>
//    <li>02: <a href="lesson02/design.html">Web Design Principles</a> | <a href="lesson02/design-principles.html">Design Principles Document</a></li>
//    <li>03: <a href="#">Description</a></li>
//    <li>04: <a href="#">Description</a></li>
//    <li>05: <a href="lesson05/bom.html">Fav BoM</a></li>
//    <li>06: <a href="#">Description</a></li>
//    <li>07: <a href="#">Description</a></li>
//    <li>08: <a href="form.html">Forms</a> | <a href="lesson08/tablebuild.html">Table</a></li>
//    <li>09: <a href="lesson09/prophets.html">Prophets</a></li>
//    <li>10: <a href="#">Description</a></li>
//</ul>/
//</section>
getLinks();