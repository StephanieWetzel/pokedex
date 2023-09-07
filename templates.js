function pokemonThumbnail(i) {
    return /*html*/`
    <div onclick="" class="pokemonCard" id="pokemonCard${i}">
        <div class="spaceBetween">
            <h2 class="capitalLetters marginBlockStart0">${pokemon['name']}</h2>
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


// function currentPokemonTemplate() {
//     return `
//     <div id="">                                  >> NOCH ID EINFÜGEN <<
//         <div class="fullWidth">
//             <div class="spaceBetween">
//                 <img class="invertWhite" src="./img/back.svg" alt="Pfeil zurück">
//                 <img class="invertWhite" src="./img/heart.svg" alt="Herz">
//             </div>
//             <div class="spaceBetween">
//                 <h1 class="capitalLetters" id="pokemonName"></h1>
//                 <span id="pokemonId"></span>
//             </div>
//             <span class="capitalLetters" id="pokemonType"></span>
//         </div>
//     </div>
//     <div class="infoContainer">
//         <div class="pokemonImageContainer">
//             <img id="pokemonImage">
//         </div>
//         <div class="statsHeader">
//             <span>About</span>
//             <span>Base Stats</span>
//             <span>Evolution</span>
//             <span>Moves</span>
//         </div>
//         <div class="padding32">
//             <div class="statsContent">
//                 <div class="statsContentProperties">
//                     <span>Height</span>
//                     <span>Weight</span>
//                     <span>Ability 1</span>
//                     <span>Ability 2</span>
//                 </div>

//                 <div class="statsContentValues">
//                     <span id="pokemonHeight"></span>
//                     <span id="pokemonWeight"></span>
//                     <span id="pokemonAbility1"></span>
//                     <span id="pokemonAbility2"></span>
//                 </div>
//             </div>

//             <h2>Breeding</h2>
//         </div>
//     </div>
//     `;
// }