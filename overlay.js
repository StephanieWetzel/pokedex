let firstAbility;
let secondAbility;
let thirdAbility;
let backgroundColor;
let typeColor1;
let typeColor2;
let pokemonStatsNames = [];
let pokemonStatsValues = [];
let pokemonMoves = [];


function renderOverlay() {
    for (let i = 0; i < loadedPokemon.length; i++) {
        document.getElementById('overlay').innerHTML = pokemonOverlay(i);
        getInfoCardBackgroundColors(i);
        getInfoCardTypeColors(i);
        getAbilities();
        getBaseStats(i);
        createChart(i);
        showAbout(i); // default Tab
        getMoves();
    }
}


function getInfoCardBackgroundColors(i) {
    let pokemonInfoCard = document.getElementById(`pokemonInfoCard${i}`);
    backgroundColor = backgroundColours[pokemonType1]; // pokemonType1 == backgroundColours[i]

    pokemonInfoCard.style.backgroundColor = backgroundColor;
}


function getInfoCardTypeColors(i) {
    let firstTypeInfoCard = document.getElementById(`firstTypeInfoCard${i}`);
    let secondTypeInfoCard = document.getElementById(`secondTypeInfoCard${i}`);

    typeColor1 = typeColours[pokemonType1];
    typeColor2 = typeColours[pokemonType2];

    firstTypeInfoCard.style.backgroundColor = typeColor1;
    secondTypeInfoCard.style.backgroundColor = typeColor2;
}


function getAbilities() {
    firstAbility = '';
    secondAbility = '';
    thirdAbility = '';

    getAbilitiesBasedOnAmount();
}


function getAbilitiesBasedOnAmount() {
    oneAbility();
    twoAbilities();
    threeAbilities();
}


function oneAbility() {
    if (pokemon['abilities'].length == 1) {
        firstAbility = pokemon['abilities'][0]['ability']['name'];
    }
}


function twoAbilities() {
    if (pokemon['abilities'].length == 2) {
        firstAbility = pokemon['abilities'][0]['ability']['name'] + ',';
        secondAbility = pokemon['abilities'][1]['ability']['name'];
    }
}


function threeAbilities() {
    if (pokemon['abilities'].length == 3) {
        firstAbility = pokemon['abilities'][0]['ability']['name'] + ',';
        secondAbility = pokemon['abilities'][1]['ability']['name'] + ',';
        thirdAbility = pokemon['abilities'][2]['ability']['name'];
    }
}


function getBaseStats(i) {
    let statsNames = currentPokemon['stats'][i]['stat']['name'];
    let statsValues = currentPokemon['stats'][i]['base_stat'];
    pokemonStatsNames.push(statsNames);
    pokemonStatsValues.push(statsValues);
}


function getMoves() {
    let moves = currentPokemon['moves'];
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i]['move']['name'];
        pokemonMoves.push(move);
    }
}




function showAbout(i) {
    document.getElementById(`about${i}`).classList.remove('dNone');
    document.getElementById(`aboutTab${i}`).style.color = backgroundColor;

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';
}


function showBaseStats(i) {
    document.getElementById(`baseStats${i}`).classList.remove('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = backgroundColor;

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';
}