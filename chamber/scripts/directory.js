const baseURL = "https://nnqchy.github.io/wdd230/chamber";
const linkURL = "https://nnqchy.github.io/wdd230/chamber/data/members.json";
//button declarations
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
// //display members declaration
const display = document.querySelector("article");
const business = document.querySelector('#business');

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
// from Get Companies //

async function getCompanies() {
    const response = await fetch(linkURL);
    const data = await response.json();
    console.log(data);
    displayData(data.members);


}

const displayData = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        // De Links 

        // let ul = document.createElement('ul');
        // let li = document.createElement('li');

        // Miembros //
        let card = document.createElement('section');
        let nombre = document.createElement('p');
        let direccion = document.createElement('p');
        let tel = document.createElement('p');
        let a = document.createElement('a');
        //        let imagen = document.createElement('img');

        nombre.textContent = member.name;
        nombre.classList.add("name");
        // Imagen //


        // "phone": "+54 223 472-3752",
        // "since": "1980",
        // "membership": "Gold",
        // "logo": "logo"


        // imagen.setAttribute("src", member.logo);
        // imagen.setAttribute("alt", `${member.name} logo`);
        // imagen.setAttribute("width", "200");

        // a.textContent = member.name;
        a.textContent = `website link`;
        a.setAttribute('href', member.website);
        // Build Company info
        tel.textContent = member.phone;
        tel.classList.add("tel");
        direccion.textContent = member.address;
        direccion.classList.add("address");


        // Append the section(card) with the created elements

        // ul.appendChild(li);


        // card.appendChild(ul);

        card.appendChild(nombre);
        card.appendChild(direccion);
        card.appendChild(tel);
        card.appendChild(a);
        // card.appendChild(imagen);
        // card.appendChild(ul);
        // card.appendChild(ul);


        business.appendChild(card);
    });
}

getCompanies();