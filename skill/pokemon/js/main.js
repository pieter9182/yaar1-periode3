const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1); //math.floor veroorzaakt dat de random nummer heel is//   // * 250 betekend van null totemet 250//



let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){ //*function veranderd de naam van de link*//
    return response.json(); //* return verandert de json naar java.script*//
})
.then(function(realData){ 
    console.log(realData);
    pokemonImage.src = realData.sprites.front_default; //* pokemonImage.src haalt de data uit de jsnon uit de sprites en dan zoekt het voor front_default*//
});
 
const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;
if(pokemonGamePlayed === false){
    catchButton.onclick = function(){
        let catchNumber = Math.floor(Math.random() * 2); 
        if(catchNumber === 0){
            pokemonText.innerText = "pokemon Fled!"
        }
        else{
            pokemonText.innerText = "pokemon Caught!"
        }
        pokemonGamePlayed = true;
    }
     
}

const drakeTitel = document.getElementById("js--drake-titel");
const joshText = document.getElementById("js--josh-text");


let drake = fetch("https://api.tvmaze.com/search/shows?q=drake%20josh")
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    drakeTitel.innerText = realData[0].show.name;
});


let josh = fetch("https://api.tvmaze.com/search/shows?q=drake%20josh")
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    joshText.innerHTML = realData[0].show.summary;
});


const name1 = document.getElementById("js--name")
const inputField = document.getElementById("js--input")

inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        console.log("test");
        let name = inputField.value;
        let age = fetch ("https://api.agify.io/?name=" + name)
                .then(function(response){
                    return response.json();
                })
                .then(function(echtedata){
                    console.log(echtedata);
                    inputField.style.display = "none"
                    name1.innerText = echtedata.age;
                });

    }
}



const labels = [
    "wii",
    "playstation 3",
    "playstation 4",
    "nintendo ds"

];

const data = {
    labels: labels,
    datasets:[
        {
            label: "most played consoles in hours",
            data: [500, 1000, 4000, 300],
            backgroundColors: ["#00235B", "#E21818", "#FFDD83", "#98DFD6"],
            
        }
    ]
}

const config = {
    type:"doughnut",
    data: data,
}





const chart1 = new Chart(document.getElementById("js--chart--2"), config);




function getpokemon(){

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, 
    bug = 0, ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0,
    psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 
    'ground', 'rock','bug', 'gost', 'steel', 'fire', 'water', 'grass', 
    'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']
   
   
   
    for(i = 0; i < 20; i++){
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
        .then(function(response){
            return response.json();
        })
        .then(function(pokemon){
           switch(pokemon.types[0].type.name){
                    case 'normal': 
                    normal = normal + 1;
                    break;
                case 'fighting':
                    fighting = fighting + 1;
                    break;
                case 'flying':
                    flying = flying + 1;
                    break;
                case 'poison' :
                    poison = poison + 1;
                    break;
                case 'ground':
                    ground = ground + 1;
                    break;
                case 'rock':
                    rock = rock + 1;
                    break;
                case 'bug ' :
                    bug = bug + 1;
                    break;
                case 'ghost':
                    ghost = ghost + 1;
                    break;
                case 'steel':
                    steel = steel + 1;
                    break;
                case 'fire':
                    fire = fire + 1;
                    break;
                case 'water':
                    water =water + 1;
                    break;
                case 'grass':
                    grass = grass + 1;
                    break;
                case 'electric':
                    electric = electric + 1;
                    break;
                case 'psychic':
                    psychic = psychic + 1;
                    break;
                case 'ice' :
                    ice = ice + 1;
                    break;
                case 'dragon':
                    dragon = dragon + 1;
                    break;
                case 'dark':
                    dark = dark + 1;
                    break;
                case 'fairy':
                    fairy = fairy + 1;
                    break;
                case 'unknown':
                    unknown = unknown + 1;
                    break;
                case 'shadow':
                    shadow = shadow + 1;
                    break;
                }
        }).then(function(){
            datapokemon.datasets[0].data =[normal, fighting, flying, poison, 
                ground, rock,bug, ghost, steel, fire, water, grass, 
                electric, psychic, ice, dragon, dark, fairy, unknown, shadow]
            graph.update();
            graph2.update();
        });
    }

    const datapokemon = {
        labels: labels,
        datasets:[
            {
                label: "pokemon types",
                data: [],
                backgroundColors: ["#00235B", "#E21818", "#FFDD83", "#98DFD6"],
                
            }
        ]
    }
    const configPokemon = {
        type:"bar",
        data:datapokemon,
    }

    const configPokemon2 ={
        type:"line",
        data: datapokemon,
    }
    
    const graph = new Chart(document.getElementById("js--chart--1"), configPokemon);
    const graph2 = new Chart(document.getElementById("js--chart--3"), configPokemon2);
}

getpokemon();






