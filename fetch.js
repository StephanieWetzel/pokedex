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