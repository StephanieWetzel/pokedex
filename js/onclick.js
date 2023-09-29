let aboutInfo;
let aboutTab;
let baseStatsInfo;
let baseStatsTab;
let evoInfo;
let evoTab;
let movesInfo;
let movesTab;


function getBackgroundColor() {
    getPokemonTypes(); // main.js
    backgroundColor = backgroundColors[pokemonType1];
}


function getParameters(i) {
    aboutInfo = document.getElementById(`about${i}`);
    aboutTab = document.getElementById(`aboutTab${i}`);

    baseStatsInfo = document.getElementById(`baseStats${i}`);
    baseStatsTab = document.getElementById(`baseStatsTab${i}`);

    evoInfo = document.getElementById(`evolution${i}`);
    evoTab = document.getElementById(`evolutionTab${i}`);

    movesInfo = document.getElementById(`moves${i}`);
    movesTab = document.getElementById(`movesTab${i}`);
}


// ABOUT
function showAboutTab(i) {
    getBackgroundColor();
    getParameters(i);

    aboutInfo.classList.remove('dNone');
    aboutTab.style.color = backgroundColor;

    hideAllTabsButAbout(i);
}


function hideAllTabsButAbout(i) {
    getParameters(i);

    baseStatsInfo.classList.add('dNone');
    baseStatsTab.style.color = '';

    movesInfo.classList.add('dNone');
    movesTab.style.color = '';

    evoInfo.classList.add('dNone');
    evoTab.style.color = '';
}


// BASE STATS
function showBaseStatsTab(i) {
    getBackgroundColor();
    getParameters(i);

    baseStatsInfo.classList.remove('dNone');
    baseStatsTab.style.color = backgroundColor;

    hideAllTabsButBaseStats(i);
}


function hideAllTabsButBaseStats(i) {
    getParameters(i);

    aboutInfo.classList.add('dNone');
    aboutTab.style.color = '';

    movesInfo.classList.add('dNone');
    movesTab.style.color = '';

    evoInfo.classList.add('dNone');
    evoTab.style.color = '';
}


// EVOLUTION
function showEvolutionTab(i) {
    getBackgroundColor();
    getParameters(i);

    evoInfo.classList.remove('dNone');
    evoTab.style.color = backgroundColor;

    hideAllTabsButEvolution(i)
}


function hideAllTabsButEvolution(i) {
    getParameters(i);

    movesInfo.classList.add('dNone');
    movesTab.style.color = '';

    baseStatsInfo.classList.add('dNone');
    baseStatsTab.style.color = '';

    aboutInfo.classList.add('dNone');
    aboutTab.style.color = '';
}


// MOVES
function showMovesTab(i) {
    getBackgroundColor();
    getParameters(i);

    movesInfo.classList.remove('dNone');
    movesTab.style.color = backgroundColor;

    hideAllTabsButMoves(i)
}


function hideAllTabsButMoves(i) {
    getParameters(i);

    baseStatsInfo.classList.add('dNone');
    baseStatsTab.style.color = '';

    aboutInfo.classList.add('dNone');
    aboutTab.style.color = '';

    evoInfo.classList.add('dNone');
    evoTab.style.color = '';
}


// OPEN/CLOSE
async function openOverlay(i) {
    await renderOverlay(i);
    document.body.style.overflow = 'hidden'; // scrollbar hidden
    document.getElementById('mainContent').classList.add('dNone');
    document.getElementById('overlay').classList.remove('dNone');
    renderButtons(i);

    if (pokemonIsFiltered()) {
        document.getElementById('previous').classList.add('dNone');
        document.getElementById('next').classList.add('dNone');
        loadMoreBtn.classList.add('dNone');
    }
}


function closeOverlay() {
    document.body.style.overflow = ''; // scrollbar visible
    pokemonStatsNames = []; // prevents stats from being multiplied with every click
    pokemonStatsValues = [];
    document.getElementById('overlay').classList.add('dNone');
    document.getElementById('mainContent').classList.remove('dNone');

    if (pokemonIsFiltered()) {
        loadMoreBtn.classList.add('dNone');
    }
}


function pokemonIsFiltered() {
    return searchQuery.value != '';
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