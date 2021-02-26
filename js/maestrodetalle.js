console.log("hola");
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

function traer(){
    fetch(`https://pokeapi.co/api/v2/5/`)
    .then(response =>response.json())
    .then(data => {
        console.log(data.results)
    })
}

traer()

// let lista = document.getElementsById("listaPokemon");

// //funcion para consultar los diferentes Pokemon.
// function consultarPokemon(id, num){
//     fetch (`https://pokeapi.co/api/v2/${id}`)
//     .then(function(response){
//          response.json()
//             .then(function(pokemon){
//                 crearPokemon(pokemon, num)
//             })
        
//     })

// }


// funtion consultarPokemones (){
//     let primerId = Math.round(Math.random()*150)
//     let segundoId = Math.round(Math.random()*150)

//     consultarPokemon(primerId, 1);
//     consultarPokemon(segundoId, 2);

// }
// function crearPokemon(pokemon, num){

// }
// consultarPokemones();