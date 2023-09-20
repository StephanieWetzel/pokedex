let species;
let allFormerPokemon = [];
let formerPokemon; // allFormerPokemon[i];
let nextSpeciesPath;
let evoTOContainer;
let allFirstEvoPokemon = [];
let allSecondEvoPokemon = [];


async function getEvos(i) {
    await fetchSpeciesForEvo();
    await renderFormerPokemon(i);
    await renderNextPokemon(i);
}


async function fetchSpeciesForEvo() {
    let speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon['name']}/`
    let speciesResponse = await fetch(speciesUrl);
    species = await speciesResponse.json();
}


// former pokemon
async function renderFormerPokemon(i) {
    let formerSpeciesPath = species['evolves_from_species'];
    if (formerSpeciesPath) {
        await fetchFormerPokemon(formerSpeciesPath);
        let evoOFContainer = document.getElementById(`evoOF${i}`);
        for (let i = 0; i < allFormerPokemon.length; i++) {
            renderFormerPokemonImg(i, evoOFContainer);
        }
    } else {
        return; // if 'evolves_from_species' is null
    }
}


async function fetchFormerPokemon(formerSpeciesPath) {
    let formerSpeciesUrl = formerSpeciesPath['url'];
    let formerSpeciesResponse = await fetch(formerSpeciesUrl);
    let formerSpeciesAsJson = await formerSpeciesResponse.json();
    let formerSpeciesId = formerSpeciesAsJson['id'];
    let formerPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${formerSpeciesId}/`;
    let formerPokemonResponse = await fetch(formerPokemonUrl);
    let formerPokemonAsJson = await formerPokemonResponse.json();
    allFormerPokemon.push(formerPokemonAsJson);
}


function renderFormerPokemonImg(i, evoOFContainer) {
    formerPokemon = allFormerPokemon[i];
    evoOFContainer.innerHTML = `
            <span>Evolved from:</span>
            <img src="${formerPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
            `;
}


// next pokemon
async function renderNextPokemon(i) {
    await fetchSpeciesEvoChain();
    evoTOContainer = document.getElementById(`evoTO${i}`);

    let pokemonBaseForm = pokemon['name'] == nextSpeciesPath['species']['name'];
    if (pokemonBaseForm) {
        if (nextSpeciesPath['evolves_to'] == '') {
            return; // if pokemon has no evolution
        }
        await renderFirstEvoPokemon();
    }

    let pokemonSecondForm = pokemon['name'] == nextSpeciesPath['evolves_to'][0]['species']['name'];
    if (pokemonSecondForm) {
        if (nextSpeciesPath['evolves_to'][0]['evolves_to'] == '') {
            return; // if pokemon has only one evolution
        }
        await renderSecondEvoPokemon();
    }
}


async function fetchSpeciesEvoChain() {
    let evoChainUrl = species['evolution_chain']['url'];
    let evoChainResponse = await fetch(evoChainUrl);
    let evoChainAsJson = await evoChainResponse.json();
    nextSpeciesPath = evoChainAsJson['chain'];
}


// first evolution
async function renderFirstEvoPokemon() {
    await fetchFirstEvoPokemon();
    for (let i = 0; i < allFirstEvoPokemon.length; i++) {
        renderFirstEvoPokemonImg(i);
    }
}


async function fetchFirstEvoPokemon() {
    let firstEvoSpeciesUrl = nextSpeciesPath['evolves_to'][0]['species']['url'];
    let firstEvoSpeciesResponse = await fetch(firstEvoSpeciesUrl);
    let firstEvoSpeciesAsJson = await firstEvoSpeciesResponse.json();
    let firstEvoSpeciesId = firstEvoSpeciesAsJson['id'];
    let firstEvoPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${firstEvoSpeciesId}/`;
    let firstEvoPokemonResponse = await fetch(firstEvoPokemonUrl);
    let firstEvoPokemonAsJson = await firstEvoPokemonResponse.json();
    allFirstEvoPokemon.push(firstEvoPokemonAsJson);
}


function renderFirstEvoPokemonImg(i) {
    let firstEvoPokemon = allFirstEvoPokemon[i];
    evoTOContainer.innerHTML = `
             <span>Evolves to:</span>
            <img src="${firstEvoPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
            `;
}


// second evolution
async function renderSecondEvoPokemon() {
    await fetchSecondEvoPokemon();
    for (let i = 0; i < allSecondEvoPokemon.length; i++) {
        renderSecondEvoPokemonImg(i);
    }
}


async function fetchSecondEvoPokemon() {
    let secondEvoSpeciesUrl = nextSpeciesPath['evolves_to'][0]['evolves_to'][0]['species']['url'];
    let secondEvoSpeciesResponse = await fetch(secondEvoSpeciesUrl);
    let secondEvoSpeciesAsJson = await secondEvoSpeciesResponse.json();
    let secondEvoSpeciesId = secondEvoSpeciesAsJson['id'];
    let secondEvoPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${secondEvoSpeciesId}/`;
    let secondEvoPokemonResponse = await fetch(secondEvoPokemonUrl);
    let secondEvoPokemonAsJson = await secondEvoPokemonResponse.json();
    allSecondEvoPokemon.push(secondEvoPokemonAsJson);
}


function renderSecondEvoPokemonImg(i) {
    let secondEvoPokemon = allSecondEvoPokemon[i];
    evoTOContainer.innerHTML = `
             <span>Evolves to:</span>
            <img src="${secondEvoPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
            `;
}