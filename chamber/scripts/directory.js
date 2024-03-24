const baseURL = "https://nnqchy.github.io/wdd230/";
const linksURL = "https://nnqchy.github.io/wdd230/data/links.json";
//button declarations
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
//display members declaration
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}



// from Get Links //

const business = document.querySelector('#bussines');


async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members);
    displayLinks(data.members);


}

const displayLinks = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.textContent = member.name;
        a.setAttribute('href', member.url);
        // Build the list
        li.textContent = `Week ${membern.address}`;


        // Append the section(card) with the created elements
        card.appendChild(ul);
        ul.appendChild(li);
        ul.appendChild(a);

        business.appendChild(card);
    });
}

getMembers();