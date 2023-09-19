async function fetchAllPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
    let response = await fetch(url);
    allPokemon = await response.json();
}


async function fetchCurrentPokemon(url) { // url aus Funktion 'loadPokemon() wird eingesetzt
    let response = await fetch(url);
    pokemon = await response.json();
    loadedPokemon.push(pokemon);
}


// async function fetchEvolution() {
//     let speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon['name']}/`
//     let speciesResponse = await fetch(speciesUrl);
//     let speciesJson = await speciesResponse.json();
//     let evoChainUrl = speciesJson['evolution_chain']['url'];
//     let evoChainResponse = await fetch(evoChainUrl);
//     evoChain = await evoChainResponse.json();
// }


async function fetchSpeciesForEvo() {
    let speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon['name']}/`
    let speciesResponse = await fetch(speciesUrl);
    species = await speciesResponse.json();
    console.log(species);
}