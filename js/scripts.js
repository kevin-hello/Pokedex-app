
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
pokemonList.forEach(function(pokemon){
  document.write(pokemon.name + "(height:" + pokemon.height +")");
  if (pokemon.height > 1) {
    document.write(" - Wow that's big!")
  }
  document.write("<br>");
});




















//let pokemonList = [
//    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
//    { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
//    { name: 'Venusaur', height: 2, types: ['grass', 'poison']}
//  ];
//pokemonList.forEach(element => {
  
//});


//  for (let i = 0; i < pokemonList.length; i++) {
//    document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ")");
//  
//    if (pokemonList[i].height > 1) {
//      document.write(" - Wow that's big!<br>");
//    }
//    document.write("<br>");
//   
//  }