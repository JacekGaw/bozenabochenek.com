const hamburgerButton = document.querySelector('#hamburgerButton');
const hamburgerIcon = document.querySelector('#hamburgerIcon');
const menuContainer = document.querySelector('#menu');


hamburgerButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    hamburgerIcon.classList.toggle("hamburger__icon--close")
    menuContainer.classList.toggle("navigation--open");
}