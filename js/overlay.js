let firstAbility;
let secondAbility;
let thirdAbility;
let backgroundColor;
let typeColor1;
let typeColor2;
let pokemonStatsNames = [];
let pokemonStatsValues = [];


async function renderOverlay(i) {
    pokemon = loadedPokemon[i];// makes sure only one pokemon will be rendered
    getPokemonTypes();
    getAbilities();
    document.getElementById('overlay').innerHTML = pokemonOverlay(i);
    renderColors(i);
    getBaseStats();
    createChart(i);
    await getEvos(i);
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