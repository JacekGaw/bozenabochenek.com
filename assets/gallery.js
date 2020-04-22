const imageSquares = document.querySelectorAll('.item__photo--square');
const closeButton = document.querySelector(`#closeGallery`);

// const closeGallery = () =>

function closeGallery(){
    document.querySelector(`.photo__box--open`).style.display = `none`;
    document.querySelector(`.photo__box--open`).classList.remove(`photo__box--open`);
    closeButton.style.display = `none`;
};

function openGallery(){
    let nrId = this.id;
    document.querySelector(`#${nrId}Box`).style.display = `flex`;
    document.querySelector(`#${nrId}Box`).classList.add(`photo__box--open`);
    closeButton.style.display = `block`;
    closeButton.addEventListener('click',closeGallery);
};

imageSquares.forEach((element, id) => {
    switch(document.title) {
        case `Plener Ślubny`:
            element.style.backgroundImage = `url('https://jacekgaw.github.io/bozenabochenek.com/assets/img/mobile/plener_slubny/plener_slubny${id}.jpg')`;
            break;
        case `Sesja Narzeczeńska`:
            element.style.backgroundImage = `url('https://jacekgaw.github.io/bozenabochenek.com/assets/img/mobile/sesja_narzeczenska/sesja_narzeczenska${id}.jpg')`;

    }
    element.addEventListener('click',openGallery);
});

