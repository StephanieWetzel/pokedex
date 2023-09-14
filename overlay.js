let firstAbility;
let secondAbility;
let thirdAbility;
let backgroundColor;
let typeColor1;
let typeColor2;
let pokemonStatsNames = [];
let pokemonStatsValues = [];


function renderOverlay(pokemon) {
    document.getElementById(`pokemonInfoCard${pokemon}`);

    renderColors(pokemon);
    renderAbilities(pokemon);
    createChart(pokemon);
    getBaseStats(pokemon);

    document.getElementById(`pokemonInfoCard${pokemon}`).innerHTML = renderOverlay(pokemon);

}


// COLORS
function getInfoCardBackgroundColors(pokemon) {
    let pokemonInfoCard = document.getElementById(`pokemonInfoCard${pokemon}`);
    backgroundColor = backgroundColours[pokemonType1]; // pokemonType1 == backgroundColours[i]

    pokemonInfoCard.style.backgroundColor = backgroundColor;
}


function getInfoCardTypeColors(pokemon) {
    let firstTypeInfoCard = document.getElementById(`firstTypeInfoCard${pokemon}`);
    let secondTypeInfoCard = document.getElementById(`secondTypeInfoCard${pokemon}`);

    typeColor1 = typeColours[pokemonType1];
    typeColor2 = typeColours[pokemonType2];

    firstTypeInfoCard.style.backgroundColor = typeColor1;
    secondTypeInfoCard.style.backgroundColor = typeColor2;
}


function renderColors(pokemon) {
    getInfoCardBackgroundColors(pokemon);
    getInfoCardTypeColors(pokemon);
}


// ABILITIES
function renderAbilities(pokemon) {
    firstAbility = '';
    secondAbility = '';
    thirdAbility = '';

    getAbilitiesBasedOnAmount(pokemon);
}


function getAbilitiesBasedOnAmount(pokemon) {
    oneAbility(pokemon);
    twoAbilities(pokemon);
    threeAbilities(pokemon);
}


function oneAbility(pokemon) {
    if (pokemon['abilities'].length == 1) {
        firstAbility = pokemon['abilities'][0]['ability']['name'];
    }
}


function twoAbilities(pokemon) {
    if (pokemon['abilities'].length == 2) {
        firstAbility = pokemon['abilities'][0]['ability']['name'] + ',';
        secondAbility = pokemon['abilities'][1]['ability']['name'];
    }
}


function threeAbilities(pokemon) {
    if (pokemon['abilities'].length == 3) {
        firstAbility = pokemon['abilities'][0]['ability']['name'] + ',';
        secondAbility = pokemon['abilities'][1]['ability']['name'] + ',';
        thirdAbility = pokemon['abilities'][2]['ability']['name'];
    }
}


// BASE STATS
function getBaseStats(pokemon) {
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
function showAbout(i) { // templates.js
    document.getElementById(`about${i}`).classList.remove('dNone');
    document.getElementById(`aboutTab${i}`).style.color = backgroundColor;

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';
}


function showBaseStats(i) { // templates.js
    document.getElementById(`baseStats${i}`).classList.remove('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = backgroundColor;

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';
}


function openOverlay(pokemon) {
    renderOverlay(pokemon);
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