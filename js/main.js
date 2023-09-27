let allPokemon; // Array - only pokemon names
let loadedPokemon = [];
let pokemon;
let pokemonType1;
let pokemonType2;
let isLoading = false;
let isSearching = false;
let searchQuery;

const backgroundColors = {
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

const typeColors = {
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

let pokemonThumbnailCount = 0;


async function loadPokemon() {
    showSpinner();
    await fetchAllPokemon();
    for (let i = 0; i < allPokemon['results'].length; i++) {
        await fetchCurrentPokemon(allPokemon['results'][i]['url']); // request for one pokemon
    }
    renderPokemonCards();
    hideSpinner();
}


async function fetchAllPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${pokemonThumbnailCount}&limit=20`
    let response = await fetch(url);
    allPokemon = await response.json();
}


async function fetchCurrentPokemon(url) { // see loadPokemon()
    let response = await fetch(url);
    pokemon = await response.json();
    loadedPokemon.push(pokemon);
}


function renderPokemonCards() {
    for (let i = pokemonThumbnailCount; i < loadedPokemon.length; i++) {
        pokemon = loadedPokemon[i];
        getPokemonTypes();
        document.getElementById('mainContent').innerHTML += pokemonThumbnail(i); // templates.js
        getPokemonBackgroundColors(i);
        getPokemonTypeColors(i);
    }
}


function getPokemonTypes() {
    pokemonType1 = '';
    pokemonType2 = '';
    // empty String if there´s no type

    if (pokemon['types'].length > 0) {
        pokemonType1 = pokemon['types'][0]['type']['name'];
    }
    if (pokemon['types'].length > 1) {
        pokemonType2 = pokemon['types'][1]['type']['name'];
    }
}


function getPokemonBackgroundColors(i) {
    let pokemonCard = document.getElementById(`pokemonCard${i}`);
    let backgroundColor = backgroundColors[pokemonType1]; // pokemonType1 == backgroundColors[i]

    pokemonCard.style.backgroundColor = backgroundColor;
}


function getPokemonTypeColors(i) {
    let firstPokemonType = document.getElementById(`firstPokemonType${i}`);
    let secondPokemonType = document.getElementById(`secondPokemonType${i}`);

    let typeColor1 = typeColors[pokemonType1];
    let typeColor2 = typeColors[pokemonType2];

    firstPokemonType.style.backgroundColor = typeColor1;
    secondPokemonType.style.backgroundColor = typeColor2;
}


// AT END OF PAGE
window.addEventListener('scroll', loadMorePokemon);


async function loadMorePokemon() {
    if (!isLoading && !isSearching) { // checks if a request is being sent already
        await loadNext20Pokemon();
    }
}


async function loadNext20Pokemon() {
    if (endOfPage()) {
        showSpinner();
        pokemonThumbnailCount += 20;
        await loadPokemon();
        hideSpinner();
    }
}


function endOfPage() {
    return (window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight;
}


// FILTER
function filterPokemon() {
    isSearching = true;
    isLoading = false;
    searchQuery = document.getElementById('searchQuery').value.toLowerCase();

    for (let i = 0; i < loadedPokemon.length; i++) {
        applyFilter(i);
        isSearching = false;
    }
}


function applyFilter(i) {
    let filteredPokemon = loadedPokemon[i].name.toLowerCase();
    let pokemonCard = document.getElementById(`pokemonCard${i}`);

    if (filteredPokemon.startsWith(searchQuery)) {
        pokemonCard.style.display = 'block';
    } else {
        pokemonCard.style.display = 'none';
    }
}


function resetFilter() {
    searchQuery = document.getElementById('searchQuery');
    searchQuery.value = '';
    filterPokemon();
}


// SPINNER
function showSpinner() {
    isLoading = true;
    document.getElementById('spinner').classList.remove('dNone');
    document.body.style.overflow = 'hidden';
}


function hideSpinner() {
    isLoading = false;
    document.getElementById('spinner').classList.add('dNone');
    document.body.style.overflow = '';
}