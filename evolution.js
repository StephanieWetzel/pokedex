let species;
let allFormerPokemon = [];
let formerPokemon; // allFormerPokemon[i];
let allNextPokemon = [];
let nextPokemon; // allNextPokemon[i];
let evoTOContainer;
let allFirstEvoPokemon = [];
let allSecondEvoPokemon = [];


async function fetchSpeciesForEvo() {
    let speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon['name']}/`
    let speciesResponse = await fetch(speciesUrl);
    species = await speciesResponse.json();
    console.log(species);
}


async function getEvos(i) {
    await fetchSpeciesForEvo();
    await fetchFormerPokemon(i);
    await fetchNextPokemon(i);
}

// former pokemon
async function fetchFormerPokemon(i) {
    // await fetchSpeciesForEvo();
    let formerSpeciesPath = species['evolves_from_species'];
    if (formerSpeciesPath) {
        await formerPokemonVariables(formerSpeciesPath);
        let evoOFContainer = document.getElementById(`evoOF${i}`);
        for (let i = 0; i < allFormerPokemon.length; i++) {
            renderFormerPokemonImg(i, evoOFContainer);
        }
    } else { // if 'evolves_from_species' is null -> stop executing function
        return;
    }
}

async function formerPokemonVariables(formerSpeciesPath) {
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
    console.log(formerPokemon);
    evoOFContainer.innerHTML = `
            <span>Evolved from:</span>
            <img src="${formerPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
            `;
}

// next pokemon
async function fetchNextPokemon(i) {
    // pokemon = loadedPokemon[i];
    // await fetchSpeciesForEvo();
    let evoChainUrl = species['evolution_chain']['url'];
    let evoChainResponse = await fetch(evoChainUrl);
    let evoChainAsJson = await evoChainResponse.json();

    let nextSpeciesPath = evoChainAsJson['chain'];
    if (pokemon['name'] == nextSpeciesPath['species']['name']) {
        if (nextSpeciesPath['evolves_to'] == '') { // pokemon has no evolution
            return;
        }
        // first evolution
        let firstEvoSpeciesUrl = nextSpeciesPath['evolves_to'][0]['species']['url'];
        let firstEvoSpeciesResponse = await fetch(firstEvoSpeciesUrl);
        let firstEvoSpeciesAsJson = await firstEvoSpeciesResponse.json();
        let firstEvoSpeciesId = firstEvoSpeciesAsJson['id'];
        let firstEvoPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${firstEvoSpeciesId}/`;
        let firstEvoPokemonResponse = await fetch(firstEvoPokemonUrl);
        let firstEvoPokemonAsJson = await firstEvoPokemonResponse.json();
        allFirstEvoPokemon.push(firstEvoPokemonAsJson);

        evoTOContainer = document.getElementById(`evoTO${i}`);
        for (let i = 0; i < allFirstEvoPokemon.length; i++) {
            let firstEvoPokemon = allFirstEvoPokemon[i];
            console.log(firstEvoPokemon);
            evoTOContainer.innerHTML = `
             <span>Evolves to:</span>
            <img src="${firstEvoPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
            `;
        }
    }
    if (pokemon['name'] == nextSpeciesPath['evolves_to'][0]['species']['name']) {
        if (nextSpeciesPath['evolves_to'][0]['evolves_to'] == '') { // pokemon has only one evolution
            return;
        }
        // second evolution
        let secondEvoSpeciesUrl = nextSpeciesPath['evolves_to'][0]['evolves_to'][0]['species']['url'];
        let secondEvoSpeciesResponse = await fetch(secondEvoSpeciesUrl);
        let secondEvoSpeciesAsJson = await secondEvoSpeciesResponse.json();
        let secondEvoSpeciesId = secondEvoSpeciesAsJson['id'];
        let secondEvoPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${secondEvoSpeciesId}/`;
        let secondEvoPokemonResponse = await fetch(secondEvoPokemonUrl);
        let secondEvoPokemonAsJson = await secondEvoPokemonResponse.json();
        allSecondEvoPokemon.push(secondEvoPokemonAsJson);

        evoTOContainer = document.getElementById(`evoTO${i}`);
        for (let i = 0; i < allSecondEvoPokemon.length; i++) {
            let secondEvoPokemon = allSecondEvoPokemon[i];
            console.log(secondEvoPokemon);
            evoTOContainer.innerHTML = `
             <span>Evolves to:</span>
            <img src="${secondEvoPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
            `;
        }
    }
}