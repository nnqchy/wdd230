const baseURL = "https://nnqchy.github.io/wdd230/";
const linksURL = "https://nnqchy.github.io/wdd230/data/links.json";
const enlaces = document.querySelector('#enlaces');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons);
    displayLinks(data.lessons);

    //   console.log(data.prophets);
    //   displayLinks(data.prophets);
}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');

        //    let years = document.createElement('p');
        //    let hijos = document.createElement('p');

        a.textContent = lesson.lname;
        a.setAttribute('href', lesson.url);
        // Build the list
        li.textContent = `Week ${lesson.week}: ${lesson.lname}`;
        //  url.textContent = `${lesson.url}`;


        //url.setAttribute('title', lesson.lname);
        //url.setAttribute('src', lesson.url);
        //    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        //   portrait.setAttribute('loading', 'lazy');
        //    portrait.setAttribute('width', '340');
        //    portrait.setAttribute('height', '440');


        // Append the section(card) with the created elements
        card.appendChild(ul);
        ul.appendChild(li);
        ul.appendChild(a);


        //link.appendChild(portrait);
        //    card.appendChild(hijos);

        enlaces.appendChild(card);
    }); // end of arrow function and forEach loop
}


getLinks();