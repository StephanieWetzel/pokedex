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
async function openOverlay(i) {
    await renderOverlay(i);
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