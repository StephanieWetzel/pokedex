let currentPokemon;
let allPokemon;


async function init() {
    await loadAllPokemon();
    // await loadCurrentPokemon();
}


async function loadCurrentPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokémon', currentPokemon);

    renderCurrentPokemon();
}


function renderCurrentPokemon() {
    document.getElementById('pokemon').innerHTML = currentPokemonTemplate(); // templates.js
    renderCurrentPokemonInfo();
}


function renderCurrentPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonId').innerHTML = '#' + currentPokemon['id'];
    document.getElementById('pokemonType').innerHTML = currentPokemon['types'][0]['type']['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('pokemonHeight').innerHTML = currentPokemon['height'];
    document.getElementById('pokemonWeight').innerHTML = currentPokemon['weight'];
    document.getElementById('pokemonAbility1').innerHTML = currentPokemon['abilities'][0]['ability']['name'];
    document.getElementById('pokemonAbility2').innerHTML = currentPokemon['abilities'][1]['ability']['name'];
}


async function loadAllPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';
    let response = await fetch(url);
    allPokemon = await response.json();
    console.log('Loaded all Pokémon', allPokemon);

    renderAllPokemon(allPokemon);
}


function renderAllPokemon() {
    for (let i = 0; i < allPokemon['results'].length; i++) {
        const onePokemon = allPokemon['results'][i];
        document.getElementById('mainContent').innerHTML += allPokemonTemplate(onePokemon); // templates.js
    }
}
