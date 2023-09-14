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
    document.getElementById('overlay').innerHTML = pokemonOverlay(i);
    renderColors(i);
    // oneAbility;
    // twoAbilities();
    // threeAbilities();
    getBaseStats();
    createChart(i);

}


// COLORS
function getInfoCardBackgroundColors(i) {
    getPokemonTypes(); // main.js

    let pokemonInfoCard = document.getElementById(`pokemonInfoCard${i}`);
    backgroundColor = backgroundColours[pokemonType1]; // pokemonType1 == backgroundColours[i]

    pokemonInfoCard.style.backgroundColor = backgroundColor;
}


function getInfoCardTypeColors(i) {
    getPokemonTypes(); // main.js

    let firstTypeInfoCard = document.getElementById(`firstTypeInfoCard${i}`);
    let secondTypeInfoCard = document.getElementById(`secondTypeInfoCard${i}`);

    typeColor1 = typeColours[pokemonType1];
    typeColor2 = typeColours[pokemonType2];

    firstTypeInfoCard.style.backgroundColor = typeColor1;
    secondTypeInfoCard.style.backgroundColor = typeColor2;
}


function renderColors(i) {
    getInfoCardBackgroundColors(i);
    getInfoCardTypeColors(i);
}


// ABILITIES
// function renderAbilities() {
//     firstAbility = '';
//     secondAbility = '';
//     thirdAbility = '';

//     getAbilitiesBasedOnAmount();
// }


// function getAbilitiesBasedOnAmount() {
//     oneAbility();
//     twoAbilities();
//     threeAbilities();
// }


// function oneAbility() {
//     let abilities = pokemon['abilities'];
//     if (abilities.length == 1) {
//         firstAbility = pokemon['abilities'][0]['ability']['name'];
//     }
// }


// function twoAbilities() {
//     if (pokemon['abilities'].length == 2) {
//         firstAbility = pokemon['abilities'][0]['ability']['name'] + ',';
//         secondAbility = pokemon['abilities'][1]['ability']['name'];
//     }
// }


// function getAbilities() {
//     for (let i = 0; i < abilities.length; i++) {
//         firstAbility = abilities[0]['ability']['name'];
//         secondAbility = abilities[1]['ability']['name'];
//         thirdAbility = abilities[2]['ability']['name'];
//         document.getElementById(`abilities${i}`)
//     }

// firstAbility = '';
// secondAbility = '';
// thirdAbility = '';

// firstAbility = pokemon['abilities'][0]['ability']['name'] + ',';
// secondAbility = pokemon['abilities'][1]['ability']['name'] + ',';
// thirdAbility = pokemon['abilities'][2]['ability']['name'];
// }


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
    backgroundColor = backgroundColours[pokemonType1];

    document.getElementById(`about${i}`).classList.remove('dNone');
    document.getElementById(`aboutTab${i}`).style.color = backgroundColor;

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';
}


function showBaseStatsTab(i) { // templates.js
    getPokemonTypes();
    backgroundColor = backgroundColours[pokemonType1];

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
    document.getElementById('overlay').classList.add('dNone');
    document.getElementById('mainContent').classList.remove('dNone');
}


function doNotClose(event) { // prevents overlay from closing when clicking in it
    event.stopPropagation();
}


function showNextCard(i) {
    openOverlay(i + 1);
}


function showPreviousCard(i) {
    openOverlay(i - 1);
}