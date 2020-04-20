const offerItems = document.querySelectorAll('.offer__item');

offerItems.forEach(function(val){
    val.style.backgroundImage = "url('/assets/img/mobile/"+val.id+".jpg')";
    console.log(val.id);
})