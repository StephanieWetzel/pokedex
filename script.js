let currentPokemon;
let allPokemon; // Array mit 25 Pokemon
let loadedPokemon = [];


async function init() {
    await loadPokemon();
    renderPokemon();
}


function renderPokemon() {
    for (let i = 0; i < loadedPokemon.length; i++) {
        const pokemon = loadedPokemon[i];
        document.getElementById('mainContent').innerHTML += `
        <div>${pokemon['name']}</div>
        `;
    }
}


async function loadPokemon() {
    await fetchAllPokemon();
    for (let i = 0; i < allPokemon['results'].length; i++) {
        await fetchCurrentPokemon(allPokemon['results'][i]['url']);
    }
    console.log(loadedPokemon);
}


async function fetchCurrentPokemon(url) {
    let response = await fetch(url);
    currentPokemon = await response.json();
    loadedPokemon.push(currentPokemon);
}


async function fetchAllPokemon() { // Array mit 25 Pokemon
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';
    let response = await fetch(url);
    allPokemon = await response.json();
}









// function renderCurrentPokemon() {
//     document.getElementById('mainContent').innerHTML = currentPokemonTemplate(); // templates.js
// }


// function renderCurrentPokemonInfo() { // will be used later
//     document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
//     document.getElementById('pokemonId').innerHTML = '#' + currentPokemon['id'];
//     document.getElementById('pokemonType').innerHTML = currentPokemon['types'][0]['type']['name'];
//     document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
//     document.getElementById('pokemonHeight').innerHTML = currentPokemon['height'];
//     document.getElementById('pokemonWeight').innerHTML = currentPokemon['weight'];
//     document.getElementById('pokemonAbility1').innerHTML = currentPokemon['abilities'][0]['ability']['name'];
//     document.getElementById('pokemonAbility2').innerHTML = currentPokemon['abilities'][1]['ability']['name'];
// }


// function renderAllPokemon() {
//     for (let i = 0; i < allPokemon['results'].length; i++) {
//         const onePokemon = allPokemon['results'][i];
//         document.getElementById('mainContent').innerHTML += allPokemonTemplate(onePokemon); // templates.js
//     }
// }