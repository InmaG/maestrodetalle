
//crear una funcion que nos muestre información de una api

// function fetchMonty (character){
//     if(character !==""){

//         fetch(`https://rickandmortyapi.com/${character}`)
//         .then(response =>response.json())
//         .then(data =>{
//             data.map(quote=>
//                 document.querySelector('body').innerHTML += 
//                 `<p>${quote.quote}</p><img src="${quote.image}"><br />` );
//         });
//     }
// }

//     document.querySelector('#choose').addEventListener("change", function() {
//         fetchToFuturama(this.value);
// });

let contenido = document.querySelector('#contenido');

// function traer(){
//     fetch(`https://pokeapi.co/api/v2/pokemon/5/`)
//     .then(response =>response.json())
//     .then(data => {
//         console.log(data)
//     })
// }

// traer()
// let name = document.getElementById("name");
// function traerPokemon(name){
    
//     fetch(`https://pokeapi.co/api/v2/pokemon/`)
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data)
//     })
// }
// traerPokemon()
let lista= document.querySelector("#listaPokemon");
let busqueda =document.querySelector("#searchterm");
let btn= document.querySelector("#search");

btn.addEventListener("click", ()=> consultarPokemon(busqueda.value.toLowerCase()));


//funcion para consultar los diferentes Pokemon.
function consultarPokemon(id){
    fetch (`https://pokeapi.co/api/v2/${id}`)
    .then(function(response){
         response.json()
            .then(function(pokemon){
                pintarpokemon(pokemon.results)
                // crearPokemon(pokemon.name)
            })
        
    })

}

function pintarpokemon(pokemons){
    console.log(pokemons)
      
pokemons.map((pokemon)=>{
    let pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add("resultados")
    let pokemonText = document.createTextNode(pokemon.name)
    pokemonDiv.appendChild(pokemonText);
    listaPokemon.appendChild(pokemonDiv);
    pokemonDiv.addEventListener("click", ()=>recogerSeleccion(pokemon.name))
})

}

function recogerSeleccion (pokemonName){
    console.log(pokemonName)

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response=>response.json())
    .then(data => pintarSeleccion(data.abilities, data.sprites))
    

}

function pintarSeleccion (pokemonSeleccionado, pokemonImagenes){
    pokemonSeleccionado.map(habilidades=>{
        let pokemonDiv = document.createElement('div');
        pokemonDiv.classList.add("habilidades");
               
        let pokemonHabilidades = document.createTextNode(`habilidad ${habilidades.ability.name}`);
        console.log(habilidades.ability)
        pokemonDiv.appendChild(pokemonHabilidades);
        listaPokemon.appendChild(pokemonDiv);                      
         })
         
    pokemonImagenes.map(image =>{
        let pokemonDivimg = document.createElement('div');
        let pokemonImg = document.createElement('img');
        // pokemonImg.setAttribute("src", image.sprites.front_shine);
        pokemonImg.setAttribute("src");
        pokemonImg.classList.add("image");

        let pokemonImagenes = document.createTextNode(`image ${image.sprites.front_shine}`);
        console.log(image.sprites)
        pokemonDivimg.appendChild(pokemonImg)
        listaPokemon.appendChild(pokemonDiv);

    })
   
    
 console.log(pokemonSeleccionado);
}

