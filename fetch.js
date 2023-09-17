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


// async function fetchEvolution(id) {
//     let url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`
//     let response = await fetch(url);
//     evoChain = await response.json();
// }