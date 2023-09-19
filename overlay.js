let firstAbility;
let secondAbility;
let thirdAbility;
let backgroundColor;
let typeColor1;
let typeColor2;
let pokemonStatsNames = [];
let pokemonStatsValues = [];
let species;
let allFormerPokemon = [];
let formerPokemon // allFormerPokemon[i];


function renderOverlay(i) {
    pokemon = loadedPokemon[i];// makes sure only one pokemon will be rendered
    getPokemonTypes();
    getAbilities();
    document.getElementById('overlay').innerHTML = pokemonOverlay(i);
    renderColors(i);
    getBaseStats();
    createChart(i);
    getEvos(i);
    getMoves(i);
}


// COLORS
function renderColors(i) {
    getInfoCardBackgroundColors(i);
    getInfoCardTypeColors(i);
}

function getInfoCardBackgroundColors(i) {
    getPokemonTypes(); // main.js

    let pokemonInfoCard = document.getElementById(`pokemonInfoCard${i}`);
    backgroundColor = backgroundColors[pokemonType1]; // pokemonType1 == backgroundColors[i]

    pokemonInfoCard.style.backgroundColor = backgroundColor;
}

function getInfoCardTypeColors(i) {
    getPokemonTypes(); // main.js

    let firstTypeInfoCard = document.getElementById(`firstTypeInfoCard${i}`);
    let secondTypeInfoCard = document.getElementById(`secondTypeInfoCard${i}`);

    typeColor1 = typeColors[pokemonType1];
    typeColor2 = typeColors[pokemonType2];

    firstTypeInfoCard.style.backgroundColor = typeColor1;
    secondTypeInfoCard.style.backgroundColor = typeColor2;
}


// ABILITIES
function getAbilities() {
    let abilities = pokemon['abilities'];
    for (let i = 0; i < abilities.length; i++) {
        if (abilities.length == 1) {
            oneAbility(abilities);
        }
        if (abilities.length == 2) {
            twoAbilities(abilities);
        }

        if (abilities.length == 3) {
            threeAbilities(abilities);
        }
    }
}

function oneAbility(abilities) {
    firstAbility = abilities[0]['ability']['name'];
    secondAbility = '';
    thirdAbility = '';
}

function twoAbilities(abilities) {
    firstAbility = abilities[0]['ability']['name'] + ',';
    secondAbility = abilities[1]['ability']['name'];
    thirdAbility = '';
}

function threeAbilities(abilities) {
    firstAbility = abilities[0]['ability']['name'] + ',';
    secondAbility = abilities[1]['ability']['name'] + ',';
    thirdAbility = abilities[2]['ability']['name'];
}


// BASE STATS
function getBaseStats() {
    let stats = pokemon['stats'];
    for (let i = 0; i < stats.length; i++) {
        let statsNames = stats[i]['stat']['name'];
        let statsValues = stats[i]['base_stat'];
        pokemonStatsNames.push(statsNames); // used in Chart
        pokemonStatsValues.push(statsValues); // used in Chart
    }
}


// EVOLUTION
async function getEvos(i) {
    await fetchSpeciesForEvo();
    await fetchFormerPokemon(i);
    await fetchNextPokemon(i);
}

// former pokemon
async function fetchFormerPokemon(i) {
    // get former species:
    let formerSpeciesPath = species['evolves_from_species'];
    if (formerSpeciesPath) { // 'evolves_from_species' != null
        await formerPokemonVariables(formerSpeciesPath);
        // fetching/rendering img of former pokemon:
        let evoOFContainer = document.getElementById(`evoOF${i}`);
        for (let i = 0; i < loadedPokemon.length; i++) {
            formerPokemon = allFormerPokemon[i];
            console.log(formerPokemon);
            evoOFContainer.innerHTML = `
            <span>Evolution of:</span>
            <img src="${formerPokemon['sprites']['other']['official-artwork']['front_default']}"></img>
            `;
        }
    } else { // if 'evolves_from_species' is null -> stop executing
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

// next pokemon
async function fetchNextPokemon(i) {
    let evoChainUrl = species['evolution_chain']['url'];
    let evoChainResponse = await fetch(evoChainUrl);
    let evoChainAsJson = await evoChainResponse.json();
    console.log(evoChainAsJson);

    // for (let i = 0; i < evoChain.length; i++) {
    //     const firstEvo = evoChain['chain']['evolves_to'][0];
    //     const secondEvo = evoChain['chain']['evolves_to'][0]['evolves_to'][0];
    //     console.log(evoChain);
    //     evoContainer.innerHTML += `
    //     <span>${firstEvo}</span>
    //     <span>${secondEvo}</span>
    //     `;
    // }
}


// MOVES
function getMoves(i) {
    let movesContainer = document.getElementById(`moves${i}`);
    let moves = pokemon['moves'];
    for (let i = 0; i < moves.length; i++) {
        let move = moves[i]['move']['name'];
        movesContainer.innerHTML += `
        <span id="move${i}">${move}</span>
        `
        document.getElementById(`move${i}`).style.backgroundColor = typeColor1;
    }
}


// ONCLICK
// tabs
function showAboutTab(i) { // templates.js
    getPokemonTypes();
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`about${i}`).classList.remove('dNone');
    document.getElementById(`aboutTab${i}`).style.color = backgroundColor;

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';

    document.getElementById(`moves${i}`).classList.add('dNone');
    document.getElementById(`movesTab${i}`).style.color = '';

    document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = '';
}


function showBaseStatsTab(i) { // templates.js
    getPokemonTypes();
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`baseStats${i}`).classList.remove('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = backgroundColor;

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';

    document.getElementById(`moves${i}`).classList.add('dNone');
    document.getElementById(`movesTab${i}`).style.color = '';

    document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = '';
}


function showEvolutionTab(i) {
    getPokemonTypes();
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`evolution${i}`).classList.remove('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = backgroundColor;

    document.getElementById(`moves${i}`).classList.add('dNone');
    document.getElementById(`movesTab${i}`).style.color = '';

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';
}


function showMovesTab(i) { // templates.js
    getPokemonTypes();
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`moves${i}`).classList.remove('dNone');
    document.getElementById(`movesTab${i}`).style.color = backgroundColor;

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';

    document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = '';
}


// overlay
function openOverlay(i) {
    renderOverlay(i);
    document.body.style.overflow = 'hidden';
    document.getElementById('mainContent').classList.add('dNone');
    document.getElementById('overlay').classList.remove('dNone');
    renderButtons(i);
}


function closeOverlay() {
    document.body.style.overflow = '';
    pokemonStatsNames = []; // prevents stats from being multiplied (reloads stats every time openOverlay(i) is executed)
    pokemonStatsValues = [];
    document.getElementById('overlay').classList.add('dNone');
    document.getElementById('mainContent').classList.remove('dNone');
}


function doNotClose(event) { // prevents overlay from closing when clicking in it
    event.stopPropagation();
}


// next/previous
function showNextCard(i) {
    pokemonStatsNames = []; // prevents stats from being multiplied (reloads stats every time openOverlay(i) is executed)
    pokemonStatsValues = [];
    openOverlay(i + 1);
}


function showPreviousCard(i) {
    pokemonStatsNames = []; // prevents stats from being multiplied (reloads stats every time openOverlay(i) is executed)
    pokemonStatsValues = [];
    openOverlay(i - 1);
}


function renderButtons(i) {
    if (i == 0) {
        document.getElementById('previous').classList.add('dNone');
    }

    if (i == loadedPokemon.length - 1) {
        document.getElementById('next').classList.add('dNone');
    }
}


// like-button
function toggleHeart() {
    document.getElementById('heart').classList.toggle('dNone');
    document.getElementById('filledHeart').classList.toggle('dNone');
}