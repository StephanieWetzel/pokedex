function pokemonThumbnail(i) {
    return `
    <div onclick="openOverlay(${i})" class="pokemonCard" id="pokemonCard${i}">
        <div class="spaceBetween marginTop8">
            <h2 class="capitalLetters marginBlockStartEnd0">${pokemon['name']}</h2>
            <span>#${pokemon['id'].toString().padStart(3, "0")}</span>
        </div>
        <div class="typesAndImageContainer">
            <div class="typesContainer">
                <span id="firstPokemonType${i}">${pokemonType1}</span>
                <span id="secondPokemonType${i}">${pokemonType2}</span>
            </div>
            <div class="pokemonImageContainer"><img src="${pokemon['sprites']['other']['official-artwork']['front_default']}"></div>
        </div>
    </div >
        `;
}


function pokemonOverlay(i) {
    backgroundColor = backgroundColours[pokemonType1];
    return /*html*/`
    <div onclick="doNotClose(event)" class="pokemonInfoCard" id="pokemonInfoCard${i}">
        <div class="padding2432">
            <div class="symbolsContainer">
                <img onclick="closeOverlay()" class="invertWhite width32" src="./img/back.svg" alt="Pfeil zurück">
                <img class="invertWhite width32" src="./img/heart.svg" alt="Herz">
            </div>

            <div class="typesContainer">
                <div class="spaceBetween">
                    <h2 class="capitalLetters marginBlockStartEnd0">${pokemon['name']}</h2>
                    <span>#${pokemon['id'].toString().padStart(3, "0")}</span>
                </div>
                <div>
                    <span id="firstTypeInfoCard${i}">${pokemonType1}</span>
                    <span id="secondTypeInfoCard${i}">${pokemonType2}</span>
                </div>
            </div>
        </div>

        <div class="infoContainer">
            <div class="InfoImageContainer"><img src="${pokemon['sprites']['other']['official-artwork']['front_default']}"></div>
            <div class="statsHeader">
                <span class="aboutTab" id="aboutTab${i}" onclick="showAboutTab(${i})" style="color: ${backgroundColor};">
                About</span>
                <span id="baseStatsTab${i}" onclick="showBaseStatsTab(${i})">
                Base Stats</span>
                <span id="evolutionTab${i}">
                Evolution</span>
                <span id="movesTab${i}">
                Moves</span>
            </div>

            <!-- ABOUT -->
            <div class="padding32" id="about${i}">
                <div class="statsContent">
                    <div class="statsContentProperties">
                        <span>Height</span>
                        <span>Weight</span>
                        <span>Abilities</span>
                    </div>

                    <div class="statsContentValues">
                        <span>${pokemon['height'] * 10} cm</span>
                        <span>${pokemon['weight'] / 10} kg</span>
                        <span>${firstAbility} ${secondAbility} ${thirdAbility}</span>
                    </div>
                </div>
            </div>

            <!-- BASE STATS -->
            <div class="dNone" id="baseStats${i}">
                <canvas class="myChart" id="myChart${i}" style="height:248px;" ></canvas>
            </div>

            <!-- MOVES -->
            <div id="moves${i}">
            </div>
        </div>
    </div >
        `;
}