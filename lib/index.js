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
//const url = "http://pokeapi.salestock.net/api/v2/pokemon/7"
// use second url as a backup only


//targeting the form to attach event listener
//const form = document.querySelector("form");

//element iwant to update with api
//const formInput = form.querySelector("input.pokemonName");

//theform input i want to update
const pokemonp1 = document.querySelector(".p1");
const pokemonImg = document.querySelector("img1");



//add event listener to the form
let button = document.querySelectorAll("accordion")
button.addEventListener("click", evt => {
    evt.preventDefault();
    const value = document.querySelector(".p1").innerHTML

    //console.log(value)


    console.log(url);
    console.log(url + value)
    fetch(url + value)
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon, pokemon.name);
            const pokemonName = pokemon.name;
            const pokemonSprite = pokemon.sprites.front_default;
            pokemonh2.innerText = pokemonName;
            // console.log(pokemonImg);
            pokemonImg.setAttribute("src", pokemonSprite);
        })
    //.catch(err => console.log(err));
});