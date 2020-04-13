const buttonBack = document.querySelector('#buttonBack');
const buttonForward = document.querySelector('#buttonForward');
const opinionText = document.querySelector('#opinionText');
const opinionAuthor = document.querySelector('#opinionAuthor');
const circlesBox = document.querySelector('#circlesBox');
const opinions = [];
opinions[0] = {
    text: "Współpraca z Panią Fotograf była bardzo pasjonująca. Jej profesjonalizm i spokojne podejście sprawiło, że efekt przeszedł Nasze oczekiwania. Zdjęcia ślubne ogląda się z zaciekawieniem.",
    author: "Justyna i Marcin"
};
opinions[1] = {
    text: "Jesteśmy ogromnie zadowoleni ze współpracy. Efektem wykonanej sesji są wspaniałe zdjęcia. Pełen profesjonalizm oraz wyjątkowe pomysły. Dziękujemy!",
    author: "Grzesiek i Asia"
};
opinions[2] = {
    text: "Cudowna Pani Fotograf z unikalną umiejętnością „wyluzowania” obiektu fotografowanego. Potrafi doskonale uchwycić nawet najmniejsze szczegóły i sprawia, że każda sceneria wygląda magicznie.",
    author: "Emilia i Leonard"
};
opinions[3] = {
    text: "Polecam. Pani Bożena to kobieta z doświadczeniem, pomysłowa, otwarta na propozycje. Kobieta lubiąca swoją pracę , wkładająca całe serce w to co robi. Sesja narzeczeńska przebiegła w przemiłej atmosferze.",
    author: "Dorota"
}
opinions[4] = {
    text: "Bardzo, bardzo polecam Panią Bożenkę! ‚wzięliśmy’ ją z polecenia i teraz my polecamy ją innym osobom, którzy są tak samo bardzo zachwyceni jak i my. Jeszcze raz dziękujemy bardzo!",
    author: "Sylwia i Darek"
};
let i = 0;

const generateCircles = () => {
    for(let i=0; i<opinions.length; i++){
        newCircle = document.createElement("div");
        newCircle.setAttribute('class', 'circle__item');
        newCircle.setAttribute('id', i)
        newCircle = circlesBox.appendChild(newCircle);
    }
};

const fillCircle = (slideNumber) => {
    const circles = document.querySelectorAll('.circle__item');
    // console.log(slideNumber);
    for(let i=0; i<circles.length; i++){
        circles[i].setAttribute('class','circle__item');
    }
    circles[slideNumber].setAttribute('class','circle__item circle__item--fill');
};

const createSlider = () => {
    i = 0;
    generateCircles();
    opinionText.innerHTML = '"' + opinions[i].text + '"';
    opinionAuthor.innerHTML = opinions[i].author;
    document.querySelector('.circle__item').setAttribute('class','circle__item circle__item--fill');
    i++;
    setInterval(() => {
        document.querySelector('.circle__item--fill').setAttribute('class','circle__item');
        fillCircle(i);
        opinionText.innerHTML = '"' + opinions[i].text + '"';
        opinionAuthor.innerHTML = opinions[i].author;
        (i < opinions.length-1) ? i++ : i=0;
    }, 5000);
};

/////// dorobić sterowanie strzałkami
const changeSlider = (direction) => {
    const circles = document.querySelectorAll('.circle__item');
    if(direction == "forward"){
        let id = document.querySelector('.circle__item--fill').id;  
        if(id != circles.length-1){
            opinionText.innerHTML = '"' + opinions[id+1].text + '"';
            opinionAuthor.innerHTML = opinions[+1].author;
        }
        // else
        //     // console.log("not ok")
    }
};

window.addEventListener('load', createSlider);
buttonBack.addEventListener('click', function(){
    changeSlider("back");
});
buttonForward.addEventListener('click', function(){
    changeSlider("forward");
});