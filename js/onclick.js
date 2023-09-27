// ABOUT
function showAboutTab(i) {
    getPokemonTypes(); // main.js
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`about${i}`).classList.remove('dNone');
    document.getElementById(`aboutTab${i}`).style.color = backgroundColor;

    hideAllTabsButAbout(i);
}


function hideAllTabsButAbout(i) {
    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';

    document.getElementById(`moves${i}`).classList.add('dNone');
    document.getElementById(`movesTab${i}`).style.color = '';

    document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = '';
}


// BASE STATS
function showBaseStatsTab(i) {
    getPokemonTypes(); // main.js
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`baseStats${i}`).classList.remove('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = backgroundColor;

    hideAllTabsButBaseStats(i);
}


function hideAllTabsButBaseStats(i) {
    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';

    document.getElementById(`moves${i}`).classList.add('dNone');
    document.getElementById(`movesTab${i}`).style.color = '';

    document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = '';
}


// EVOLUTION
function showEvolutionTab(i) {
    getPokemonTypes(); // main.js
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`evolution${i}`).classList.remove('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = backgroundColor;

    hideAllTabsButEvolution(i)
}


function hideAllTabsButEvolution(i) {
    document.getElementById(`moves${i}`).classList.add('dNone');
    document.getElementById(`movesTab${i}`).style.color = '';

    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';
}


// MOVES
function showMovesTab(i) {
    getPokemonTypes(); // main.js
    backgroundColor = backgroundColors[pokemonType1];

    document.getElementById(`moves${i}`).classList.remove('dNone');
    document.getElementById(`movesTab${i}`).style.color = backgroundColor;

    hideAllTabsButMoves(i)
}


function hideAllTabsButMoves(i) {
    document.getElementById(`baseStats${i}`).classList.add('dNone');
    document.getElementById(`baseStatsTab${i}`).style.color = '';

    document.getElementById(`about${i}`).classList.add('dNone');
    document.getElementById(`aboutTab${i}`).style.color = '';

    document.getElementById(`evolution${i}`).classList.add('dNone');
    document.getElementById(`evolutionTab${i}`).style.color = '';
}


// OPEN/CLOSE
async function openOverlay(i) {
    await renderOverlay(i);
    document.body.style.overflow = 'hidden'; // scrollbar hidden
    document.getElementById('mainContent').classList.add('dNone');
    document.getElementById('overlay').classList.remove('dNone');
    renderButtons(i);
}


function closeOverlay() {
    document.body.style.overflow = ''; // scrollbar visible
    pokemonStatsNames = []; // prevents stats from being multiplied with every click
    pokemonStatsValues = [];
    document.getElementById('overlay').classList.add('dNone');
    document.getElementById('mainContent').classList.remove('dNone');
}


function doNotClose(event) { // prevents overlay from closing when clicking in it
    event.stopPropagation();
}


// NEXT/PREVIOUS
function showNextCard(i) {
    pokemonStatsNames = [];
    pokemonStatsValues = [];
    openOverlay(i + 1);
}


function showPreviousCard(i) {
    pokemonStatsNames = [];
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


// LIKE-BUTTON
function toggleHeart() {
    document.getElementById('heart').classList.toggle('dNone');
    document.getElementById('filledHeart').classList.toggle('dNone');
}