let firstAbility;
let secondAbility;
let thirdAbility;
let backgroundColor;
let typeColor1;
let typeColor2;
let pokemonStatsNames = [];
let pokemonStatsValues = [];


function renderOverlay(i) {
    pokemon = loadedPokemon[i];// makes sure only one pokemon will be rendered
    getPokemonTypes();
    getAbilities();
    document.getElementById('overlay').innerHTML = pokemonOverlay(i);
    renderColors(i);
    getBaseStats();
    createChart(i);
}


// COLORS
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


function renderColors(i) {
    getInfoCardBackgroundColors(i);
    getInfoCardTypeColors(i);
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


// function getMoves(i) {
//     let moves = pokemon['moves'];

//     for (let i = 0; i < moves.length; i++) {
//         const move = moves[i]['move']['name'];
//         document.getElementById(`moves${i}`).innerHTML += `
//         <div class="moveContainer">${move}</div>
//         `
//     }
// }


// ONCLICK
function showAboutTab(i) { // templates.js
    getPokemonTypes();
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`about${i}`).classList.remove('dNone');
    document.getElementById(`aboutTab${i}`).style.color = backgroundColor;

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';
}


function showBaseStatsTab(i) { // templates.js
    getPokemonTypes();
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`baseStats${i}`).classList.remove('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = backgroundColor;

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';
}


function openOverlay(i) {
    renderOverlay(i);
    document.body.style.overflow = 'hidden';
    document.getElementById('mainContent').classList.add('dNone');
    document.getElementById('overlay').classList.remove('dNone');
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