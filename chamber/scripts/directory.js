const linksURL = "https://nnqchy.github.io/wdd230/chamber/data/members.json";
const layout = document.querySelector(".layout");


document.addEventListener("DOMContentLoaded", () => {
    layout.classList.add("grid");
});





async function getMembers(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        console.table(data);

        displayMembers(data.name);
    }
}


getMembers(linksURL);
