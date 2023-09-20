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



const chart1 = new Chart(document.getElementById("js--chart--1"), config);



function getpokemon(){

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, 
    bug = 0, ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0,
    psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 
    'ground', 'rock','bug', 'gost', 'steel', 'fire', 'water', 'grass', 
    'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']

    



    for(i = 0; i < 100; i++){
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
                console.log(); 
        }).then(function(){
            console.log("ik ben klaar");
            datapokemon2.datasets[0].data =[normal, fighting, flying, poison, 
                ground, rock,bug, ghost, steel, fire, water, grass, 
                electric, psychic, ice, dragon, dark, fairy, unknown, shadow]
            graph.update();
        });
    }

    const datapokemon2 = {
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
        data:datapokemon2,
    }
    
    const graph = new Chart(document.getElementById("js--chart--2"), configPokemon);
}

getpokemon();