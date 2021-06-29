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

  return {
    add: add,
    getAll: getAll
  };
  
})();

pokemonRepository.add({
  name:'Pikachu',
  height: 1.5,
  types: ['electric']
})

pokemonRepository.getAll().forEach((pokemon) => {
  document.write(pokemon.name + "(height: " + pokemon.height + ")");
  if (pokemon.height>1){
    document.write(" -Wow that's big!")
  }
  document.write("<br>");
});
 


















