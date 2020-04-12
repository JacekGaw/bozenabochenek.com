const hamburgerButton = document.querySelector('#hamburgerButton');
const hamburgerIcon = document.querySelector('#hamburgerIcon');
const menuContainer = document.querySelector('#menu');
const portfolioImages = document.querySelectorAll('.container__item');

hamburgerButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    hamburgerIcon.classList.toggle("hamburger__icon--close")
    menuContainer.classList.toggle("navigation--open");
}
// function getImageWidth() {
//     for(let i=0; i<portfolioImages.length; i++){
//         portfolioImages[i].offsetWidth = portfolioImages[i].style.width * 0.75;
//         console.log(portfolioImages[i].style.width);
//         portfolioImages[i].style.height = portfolioImages[i].offsetHeight;
//     }
// }
// getImageWidth()