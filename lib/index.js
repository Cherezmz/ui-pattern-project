var section = document.getElementsByClassName("accordion");

for (var i = 0; i < section.length; i++) {
    section[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const url = "https://pokeapi.co/api/v2/pokemon/";

//I checked the names of pokemons if to add a number
//from 1-4 to the end of the link 

let bulbasaur = document.querySelector("#pokeButton1")
let bulbasaurImg = document.querySelector(".img1")
let bulbasaurP = document.querySelector("#poke1")

bulbasaur.addEventListener("click", evt => {
    //evt.preventDefault()
    fetch(url + "1")
        .then(res => res.json())
        .then(res => {
            bulbasaurP.innerHTML = "Height of " + res.name + " is " + res.height
            bulbasaurImg.setAttribute("src", res.sprites.front_default)
        })
})


let ivysaur = document.querySelector("#pokeButton2")
let ivysaurImg = document.querySelector(".img2")
let ivysaurP = document.querySelector("#poke2")

ivysaur.addEventListener("click", evt => {
    //evt.preventDefault()
    fetch(url + "2")
        .then(res => res.json())
        .then(res => {
            ivysaurP.innerHTML = "Height of " + res.name + " is " + res.height
            ivysaurImg.setAttribute("src", res.sprites.front_default)
        })
})

let venusaur = document.querySelector("#pokeButton3")
let venusaurImg = document.querySelector(".img3")
let venusaurP = document.querySelector("#poke3")

venusaur.addEventListener("click", evt => {
    //evt.preventDefault()
    fetch(url + "3")
        .then(res => res.json())
        .then(res => {
            venusaurP.innerHTML = "Height of " + res.name + " is " + res.height
            venusaurImg.setAttribute("src", res.sprites.front_default)
        })
})


let charmander = document.querySelector("#pokeButton4")
let charmanderImg = document.querySelector(".img4")
let charmanderP = document.querySelector("#poke4")

charmander.addEventListener("click", evt => {
    //evt.preventDefault()
    fetch(url + "4")
        .then(res => res.json())
        .then(res => {
            charmanderP.innerHTML = "Height of " + res.name + " is " + res.height
            charmanderImg.setAttribute("src", res.sprites.front_default)
        })
})

