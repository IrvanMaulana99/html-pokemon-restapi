window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});

// 
const pokedex = document.getElementById('pokedex');
//ambil data pokemon dari API
const fetchPokemon = () => {
    const promises = [];
    // 350 data pokemon
    for (let i = 1; i <= 151; i++) {
        // alamat API
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        // menampilkan pokemon
        displayPokemon(pokemon);
    });
};
// menampilkan pokemon dalam bentuk card
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};
fetchPokemon();

const pokedex2 = document.getElementById('pokedex2');
//ambil data pokemon dari API
const fetchPokemon2 = () => {
    const promises2 = [];
    // 350 data pokemon
    for (let i = 152; i <= 251; i++) {
        // alamat API
        const url2 = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises2.push(fetch(url2).then((res) => res.json()));
    }
    Promise.all(promises2).then((results) => {
        const pokemon2 = results.map((result) => ({
            name2: result.name,
            image2: result.sprites['front_default'],
            type2: result.types.map((type) => type.type.name).join(', '),
            id2: result.id
        }));
        // menampilkan pokemon
        displayPokemon2(pokemon2);
    });
};
// menampilkan pokemon dalam bentuk card
const displayPokemon2 = (pokemon2) => {
    console.log(pokemon2);
    const pokemonHTMLString = pokemon2
        .map(
            (pokeman2) => `
        <li class="card">
            <img class="card-image" src="${pokeman2.image2}"/>
            <h2 class="card-title">${pokeman2.id2}. ${pokeman2.name2}</h2>
            <p class="card-subtitle">Type: ${pokeman2.type2}</p>
        </li>
    `
        )
        .join('');
    pokedex2.innerHTML = pokemonHTMLString;
};
fetchPokemon2();
