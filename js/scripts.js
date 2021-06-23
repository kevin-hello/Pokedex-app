let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    { name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
    { name: 'Venusaur', height: 2, types: ['grass', 'poison']}
  ];

for (let i=0; i< pokemonList.length; i++){
  if (pokemonList[i].height >1){
  document.write(pokemonList[i].name) + document.write(' (height:') + document.write(pokemonList[i].height) + document.write(") - Wow that's big!<br>"); 
  }
  else
  {
    document.write(pokemonList[i].name) + document.write(' (height:') + document.write(pokemonList[i].height) + document.write(')<br>');
  }}