

const searchPokemon = document.querySelector("#button_search")
const pokemonImg = document.getElementById("pokemon_img")
console.log(pokemonImg)

searchPokemon.addEventListener("click", renderPokemon)

async function renderPokemon() {
  const img = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => response.json())
    .then(({ sprites }) =>
      sprites.other.home.front_default
    )


  console.log(typeof (img), img)

  pokemonImg.innerHTML = `<img src=${img} alt="pokemon">`




}
