async function fetchCurrentPokemon(url) { // url aus Funktion 'loadPokemon() wird eingesetzt
    let response = await fetch(url);
    currentPokemon = await response.json();
    loadedPokemon.push(currentPokemon);
}


async function fetchAllPokemon() { // Array mit 25 Pokemon
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
    let response = await fetch(url);
    allPokemon = await response.json();
}