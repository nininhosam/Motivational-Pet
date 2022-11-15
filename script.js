let assortment = [
    "have a good day!",
    "No matter the how unlikely you are to hit it, Giving up is always a guaranteed miss",
    "Opportunities don't happen, you create them",
    "Success is not final; <br> Failure is not fatal; <br> It is the courage to continue that counts",
    "Don't focus on the pain, <br> Focus on the progress",
    "Work hard in silence; <br> Let success  make the noise",
    "Don't let yesterday take up too much of today",
    "You learn more from failure than from success. <br> Don't let it stop you, failure builds character",
    "The most difficult thing is the decision to act, the rest is merely tenacity"

]
var getRandomNumber = () => Math.floor(Math.random() * assortment.length)
let speech = document.querySelector("p#speech")
let pet = document.querySelector("img#pet")
let jar = document.querySelector("img#petfood")
let bod = document.querySelector("body")
let bowl = document.querySelector("img.bowl")


function changeSpeech() {
    speech.innerHTML = assortment[getRandomNumber()]
}
var speechTimer = setInterval(changeSpeech, 15000)


function ask() {
    changeSpeech();
    clearInterval(speechTimer);
    speechTimer = setInterval(changeSpeech, 15000);
}
pet.addEventListener("click", ask)


function grabJar() {
    if (bod.className == "") {
        bod.classList.add('jar-active')
        pet.style.removeProperty('cursor')
        jar.style.removeProperty('cursor')
    }
}
jar.addEventListener("click", grabJar)


function emptyBowl() {
    bowl.setAttribute("src", "assets/bowl_empty.png")
    bowl.setAttribute("id", "empty")
}
function clicked(e) {
    if (bod.className == "jar-active" && e.path[0].id != "petfood") {
        if (e.path[0].id == "bowl") {
            bowl.setAttribute("src", "assets/bowl_full.png")
            bowl.setAttribute("id", "full")
            bod.className = ""
            pet.style.cursor = "pointer"
            jar.style.cursor = "grab"
            setTimeout(emptyBowl, 30000)
        } else {
            bod.className = ""
            pet.style.cursor = "pointer"
            jar.style.cursor = "grab"
        }
    }
}
bowl.addEventListener("click", clicked)
bod.addEventListener("click", clicked)