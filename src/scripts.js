let pokemonRepository = (function () {
  let modalContainer = document.querySelector(".container");
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let searchInput = document.querySelector("#search-bar");

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal header

    let nameElement = $("<h1>" + item.name + "</h1>");

    //creating image element in modal

    let imageElementFront = $('<img class="modal-img" style="width:50%">');

    imageElementFront.attr("src", item.imageUrlFront);

    let imageElementBack = $('<img class="modal-img" style="width:50%">');

    imageElementBack.attr("src", item.imageUrlBack);

    //creating a height element in modal
    let heightElement = $("<p>" + "height: " + item.height + "</p>");

    //creating a weight element in modal
    let weightElement = $("<p>" + "weight: " + item.weight + "</p>");

    // creating a type element in modal
    let typesElement = $("<p>" + "types: " + item.types.join(", ") + "</p>");

    //creating an abilities element in modal
    let abilitiesElement = $(
      "<p>" + "abilities: " + item.abilities.join(", ") + "</p>"
    );

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    listItem.classList.add(
      "group-list-item",
      "col-12",
      "col-lg-4",
      "col-md-6",
      "col-sm-12"
    );
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class", "btn", "btn-primary");
    button.setAttribute("data-target", "#pokemonModal");
    button.setAttribute("data-toggle", "modal");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            height: item.height,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.types = [];
        for (let i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        item.weight = details.weight;
        item.abilities = [];
        for (let i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  // search bar function

  searchInput.addEventListener("input", function () {
    let listPokemon = document.querySelectorAll(".group-list-item");
    let value = searchInput.value.toUpperCase();

    listPokemon.forEach(function (pokemon) {
      if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
        pokemon.style.display = "";
      } else {
        pokemon.style.display = "none";
      }
    });
  });

  return {
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
