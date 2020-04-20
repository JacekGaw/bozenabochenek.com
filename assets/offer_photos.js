const offerItems = document.querySelectorAll('.offer__item');

offerItems.forEach(function(val){
    val.style.backgroundImage = "url('https://jacekgaw.github.io/bozenabochenek.com/assets/img/mobile/"+val.id+".jpg')";
    console.log(val.id);
})