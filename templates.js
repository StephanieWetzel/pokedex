// function currentPokemonTemplate() {
//     return `
//     <div id="">                                  >> NOCH ID EINFÜGEN <<
//         <div class="fullWidth">
//             <div class="symbolsContainer">
//                 <img class="invertWhite" src="./img/back.svg" alt="Pfeil zurück">
//                 <img class="invertWhite" src="./img/heart.svg" alt="Herz">
//             </div>
//             <div class="nameContainer">
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


// function currentPokemonTemplate() {
//     return `
//     <div onclick="" class="pokemonCard">
//         <h2 class="capitalLetters">${currentPokemon['name']}</h2>
//         <span id="pokemonId">'#' + ${currentPokemon['id']}</span>
//     </div>
//     `;
// }


// function allPokemonTemplate(pokemonData) {
//     return `
//     <div class="pokemonCard">
//         <div id="">                              >> NOCH ID EINFÜGEN <<
//             <div class="fullWidth">
//                 <div class="symbolsContainer">
//                     <img class="invertWhite" src="./img/back.svg" alt="Pfeil zurück">
//                     <img class="invertWhite" src="./img/heart.svg" alt="Herz">
//                 </div>
//                 <div class="nameContainer">
//                     <h1 class="capitalLetters">${pokemonData.name}</h1>
//                     <span>#${pokemonData.id}</span>
//                 </div>
//                 <span class="capitalLetters">${pokemonData.types[0].type.name}</span>
//             </div>
//         </div>
//         <div class="infoContainer">
//             <div class="pokemonImageContainer">
//                 <img src="${pokemonData.sprites.other['official-artwork'].front_default}" alt="${pokemonData.name}">
//             </div>
//             <div class="statsHeader">
//                 <span>About</span>
//                 <span>Base Stats</span>
//                 <span>Evolution</span>
//                 <span>Moves</span>
//             </div>
//             <div class="padding32">
//                 <div class="statsContent">
//                     <div class="statsContentProperties">
//                         <span>Height</span>
//                         <span>Weight</span>
//                         <span>Ability 1</span>
//                         <span>Ability 2</span>
//                     </div>

//                     <div class="statsContentValues">
//                         <span>${pokemonData.height}</span>
//                         <span>${pokemonData.weight}</span>
//                         <span>${pokemonData.abilities[0].ability.name}</span>
//                         <span>${pokemonData.abilities[1].ability.name}</span>
//                     </div>
//                 </div>
//                 <h2>Breeding</h2>
//             </div>
//         </div>
//     </div>
//     `;
// }