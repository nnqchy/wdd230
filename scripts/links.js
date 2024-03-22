const baseURL = "https://nnqchy.github.io/wdd230/";
const linksURL = "https://nnqchy.github.io/wdd230/data/links.json";
const enlaces = document.querySelector('#enlaces');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons);
    displayLinks(data.lessons);
}

const displayLinks = (links) => {
    links.forEach((link) => {
        // Create elements to add to the div.cards element
        let room = document.createElement('section');
        let h2 = document.createElement('h2');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let portrait = document.createElement('url');

        //    let years = document.createElement('p');
        //    let hijos = document.createElement('p');

        // Build the h2 content 
        h2.textContent = `Learning Activities JS`;

        // Build the list
        li.textContent = `${lessons.lesson}`;
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