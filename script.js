let currentPokemon;
let allPokemon; // Array - only pokemon names
let loadedPokemon = []; // 
let pokemon; // loadedPokemon[i];
let pokemonType1;
let pokemonType2;

const backgroundColours = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
};

const typeColours = {
    normal: '#C6C6A7',
    fire: '#F5AC78',
    water: '#9DB7F5',
    electric: '#FAE078',
    grass: '#A7DB8D',
    ice: '#BCE6E6',
    fighting: '#D67873',
    poison: '#C183C1',
    ground: '#EBD69D',
    flying: '#A890F0',
    psychic: '#FA92B2',
    bug: '#C6D16E',
    rock: '#D1C17D',
    ghost: '#A292BC',
    dragon: '#A27DFA',
    dark: '#A29288',
    steel: '#D1D1E0',
    fairy: '#F4BDC9',
};


async function init() {
    await loadPokemon();
    console.log(loadedPokemon);
    console.log(pokemon);
}


async function loadPokemon() {
    await fetchAllPokemon();
    for (let i = 0; i < allPokemon['results'].length; i++) {
        await fetchCurrentPokemon(allPokemon['results'][i]['url']); // request für einzelnes Pokemon zusammengestellt
    }
    renderPokemonCards();
}


function renderPokemonCards() {
    for (let i = 0; i < loadedPokemon.length; i++) {
        pokemon = loadedPokemon[i];
        getPokemonTypes();
        document.getElementById('mainContent').innerHTML += pokemonThumbnail(i);
        getPokemonBackgroundColors(i);
        getPokemonTypeColors(i);
    }
}


async function fetchCurrentPokemon(url) { // url aus Funktion 'loadPokemon() wird eingesetzt'
    let response = await fetch(url);
    currentPokemon = await response.json();
    loadedPokemon.push(currentPokemon);
}


async function fetchAllPokemon() { // Array mit 25 Pokemon
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';
    let response = await fetch(url);
    allPokemon = await response.json();
}


function getPokemonTypes() {
    pokemonType1 = '';
    pokemonType2 = '';
    // empty String if there´s no type

    if (pokemon['types'].length > 0) { // first type
        pokemonType1 = pokemon['types'][0]['type']['name'];
    }

    if (pokemon['types'].length > 1) { // second type
        pokemonType2 = pokemon['types'][1]['type']['name'];
    }
}


function getPokemonBackgroundColors(i) {
    let pokemonCard = document.getElementById(`pokemonCard${i}`);
    let backgroundColor = backgroundColours[pokemonType1]; // pokemonType1 == backgroundColours[i]

    pokemonCard.style.backgroundColor = backgroundColor;
}


function getPokemonTypeColors(i) {
    let firstPokemonType = document.getElementById(`firstPokemonType${i}`);
    let secondPokemonType = document.getElementById(`secondPokemonType${i}`);

    let typeColor1 = typeColours[pokemonType1];
    let typeColor2 = typeColours[pokemonType2];

    firstPokemonType.style.backgroundColor = typeColor1;
    secondPokemonType.style.backgroundColor = typeColor2;
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