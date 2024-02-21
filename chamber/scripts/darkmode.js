const darkModeToggle = document.querySelector('#dark-toggle');



//when the button is clicked
darkModeToggle.addEventListener('click', () => {
    //toggle on the dark-mode class
    darkModeToggle.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    console.log()
});