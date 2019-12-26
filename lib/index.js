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
            console.log(res)
            console.log(res.height)
            console.log(res.sprites.front_default)
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









// var section = document.getElementsByClassName("accordion");

// for (var i = 0; i < section.length; i++) {
//     section[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

// 
// //const url = "http://pokeapi.salestock.net/api/v2/pokemon/7"
// // use second url as a backup only


// //targeting the form to attach event listener
// //const form = document.querySelector("form");

// //element iwant to update with api
// //const formInput = form.querySelector("input.pokemonName");

// //theform input i want to update
// const pokemonp1 = document.querySelector(".p1");
// const pokemonImg = document.querySelector("img1");



// //add event listener to the form
// let button = document.querySelectorAll("accordion")
// button.addEventListener("click", evt => {
//     evt.preventDefault();
//     const value = document.querySelector(".p1").innerHTML

//     //console.log(value)


//     console.log(url);
//     console.log(url + value)
//     fetch(url + value)
//         .then(res => res.json())
//         .then(pokemon => {
//             console.log(pokemon, pokemon.name);
//             const pokemonName = pokemon.name;
//             const pokemonSprite = pokemon.sprites.front_default;
//             pokemonh2.innerText = pokemonName;
//             // console.log(pokemonImg);
//             pokemonImg.setAttribute("src", pokemonSprite);
//         })
//     //.catch(err => console.log(err));
// });