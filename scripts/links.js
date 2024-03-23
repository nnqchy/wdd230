const baseURL = "https://nnqchy.github.io/wdd230/";
const linksURL = "https://nnqchy.github.io/wdd230/data/links.json";
const enlaces = document.querySelector('#enlaces');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons);
    displayLinks(data.lessons);


}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.textContent = lesson.lname;
        a.setAttribute('href', lesson.url);
        // Build the list
        li.textContent = `Week ${lesson.week}`;


        // Append the section(card) with the created elements
        card.appendChild(ul);
        ul.appendChild(li);
        ul.appendChild(a);

        enlaces.appendChild(card);
    });
}

getLinks();