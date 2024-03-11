// Select the visits element
const visits = document.querySelector(".visits");

// Get current date
const currentDate = new Date();

// Get stored value from localStorage
const previsit = Number(window.localStorage.getItem("previsit-ls")) || 0;

// Calculate the difference between the current date and the last visited date
const visitsDif = currentDate.getTime() - previsit;

// if there's no previous visits, 
if (previsit === 0) {
    // output this message
    visits.textContent = "Welcome! Let us know if you have any questions.";
    // else if less and a full day in milliseconds,
} else if (visitsDif <= 86400000) {
    // output "Back so soon! Awesome"
    visits.textContent = "Back so soon! Awesome";
} else {
    // else if more than a day in milliseconds
    const dias = Math.floor(visitsDif / (1000 * 60 * 60 * 24));
    // output this message
    if (dias === 1) {
        visits.textContent = `You last visited ${dias} day ago.`;
    }
    visits.textContent = `You last visited ${dias} days ago.`;
}

// Store the current visit date in localStorage

window.localStorage.setItem("previsit-ls", currentDate.getTime());


