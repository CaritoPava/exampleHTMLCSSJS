let form = document.querySelector("form");
const button = document.querySelector('button');
const pokemonImg = document.getElementById('isertImg');
const dataUser = {
  name,
  number,
}

let imgRender = ""

form.addEventListener("submit", function (event) {
  event.preventDefault()
  getFormData();
  getPokemonById(dataUser.number).then(() => nameMyPokemon(dataUser.name))
})

function getFormData() {
  const name = document.querySelector('#name').value;
  const number = document.querySelector('#number').value;
  dataUser.name = name;
  dataUser.number = number;
}

function renderPokemon(img) {
  pokemonImg.innerHTML = `<img src="${img}" alt="pokemon">`
}
async function getPokemonById(id) {
  const img = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(({ sprites }) =>
      sprites.other.home.front_default
    )
  renderPokemon(img);
}

function nameMyPokemon(name) {
  const namePokemon = document.getElementById('insertName');
  namePokemon.innerText = `${name} - ${name}`
}
