let assortment = [
    "have a good day!",
    "No matter the how unlikely you are to hit it, Giving up is always a guaranteed miss",
    "Opportunities don't happen, you create them",
    "Success is not final; <br> Failure is not fatal; <br> It is the courage to continue that counts",
    "Don't focus on the pain, <br> Focus on the progress",
    "Work hard in silence; <br> Let success  make the noise",
    "Don't let yesterday take up too much of today",
    "You learn more from failure than from success. <br> Don't let it stop you, failure builds character",
    "The most difficult thing is the decision to act, the rest is merely tenacity",
]
var chirps = [
    new Audio('assets/chirp1.mp3'),
    new Audio('assets/chirp2.mp3')
]
let pour = new Audio('assets/pour.mp3');
let shake = new Audio('assets/shake.mp3')
let speech = document.querySelector("p#speech");
let pet = document.querySelector("img#pet");
let jar = document.querySelector("img#petfood");
let bod = document.querySelector("body");
let bowl = document.querySelector("img.bowl");
var hungerTimer = null;
var getRandomNumber = max => Math.floor(Math.random() * max);

function changeSpeech() {
    chirps[getRandomNumber(chirps.length)].play();
    speech.innerHTML = assortment[getRandomNumber(assortment.length)];
}
function ask() {
    changeSpeech();
    clearInterval(speechTimer);
    speechTimer = setInterval(changeSpeech, 15000);
}
function grabJar() {
    if (bod.className == "") {
        shake.play()
        bod.classList.add('jar-active');
        bod.style.cursor = `url('assets/jar.png'), auto`;
        pet.style.removeProperty('cursor');
        jar.style.removeProperty('cursor');
    }
}
function emptyBowl() {
    bowl.setAttribute("src", "assets/bowl_empty.png");
}
function clicked(e) {
    if (bod.className == "jar-active" && e.path[0].id != "petfood") {
        if (e.path[0].id == "bowl") {
            pour.play();
            bowl.setAttribute("src", "assets/bowl_full.png");
            bod.className = "";
            bod.style.removeProperty('cursor');
            bowl.style.cursor = "pointer";
            pet.style.cursor = "pointer";
            jar.style.cursor = "grab";
            clearInterval(hungerTimer);
            hungerTimer = setInterval(emptyBowl, 30000);
        } else {
            bod.className = "";
            bod.style.removeProperty('cursor');
            bowl.style.cursor = "pointer";
            pet.style.cursor = "pointer";
            jar.style.cursor = "grab";
        }
    }
}
function hovered() {
    if (bod.className == "jar-active") {
        bowl.style.cursor = `url('assets/jar_pour.png'), auto`;
    }
}

var speechTimer = setInterval(changeSpeech, 15000);
pet.addEventListener("click", ask);
jar.addEventListener("click", grabJar);
bowl.addEventListener("mouseenter", hovered);
bowl.addEventListener("click", clicked);
bod.addEventListener("click", clicked);