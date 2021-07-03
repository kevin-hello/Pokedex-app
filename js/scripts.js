let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      types: ['grass', 'poison']
    },
    {
      name: 'Ivysaur',
      height: 1,
      types: ['grass', 'poison']
    },
    {
      name: 'Venusaur',
      height: 2,
      types: ['grass', 'poison']
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll(){
    return pokemonList;
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.addEventListener("click", function(){
      showDetails(pokemon)

    });
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
  
})();

pokemonRepository.add({
  name:'Pikachu',
  height: 1.5,
  types: ['electric']
})

pokemonRepository.getAll().forEach(function (pokemon) { 
  pokemonRepository.addListItem(pokemon);
});
 















