const images = document.querySelectorAll('.image');
console.log(images);

const changeSlider = (currentSlide) => {
    console.log(currentSlide);
    currentSlide == 0 ? images[images.length - 1].style.display = 'none' : images[currentSlide - 1].style.display = 'none';
    images[currentSlide].style.display = 'block';
};

const sliderStart = () => {
    images[0].style.display = "block";
    let currentSlide = 1;
    setInterval(() => {
        changeSlider(currentSlide);
        currentSlide < (images.length - 1) ? currentSlide ++ : currentSlide = 0;
    }, 10000);
}

window.innerWidth > 1200 ? sliderStart() : stop;

