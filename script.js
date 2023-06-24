var quantEscolhida = document.getElementById('quantidade')
var pokemonBokes = document.querySelector('.pokemon-boxs')
var pokemons = []
quantEscolhida.addEventListener('keyup',()=>{
    pokemonBokes.innerHTML=""
    pokemons = []
    pegaPokemon(quantEscolhida.value)
})
//limit='+quantidade
function pegaPokemon(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?')
    .then(response=>response.json())
    .then(allpokemon=> {
        shuffleArray(allpokemon.results).map((val)=>{
        
            fetch(val.url)
            .then(response=>response.json())
            .then(pokemonSingle =>{
                
                pokemons.push({
                    nome:val.name,
                    imagem:pokemonSingle.sprites.front_default,
                })

                if(pokemons.length == quantidade){
                    var pokemonBokes = document.querySelector('.pokemon-boxs')  
                       
                    pokemons.map(function(val){  
                        console.log(val)
                        
                        pokemonBokes.innerHTML+= `
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`" alt="">
                                <p>`+val.nome+`</p>
                            </div>
                        `
                    })
                }
            })
        })
        
    })
}

// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}
