const startbutten = document.getElementById("js--start");
const stopButten = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
console.log(stopButten);
let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer")
const minutesTimer = document.getElementById("js--minutesTimer")

 let timer;

startbutten.onclick = function(){
    if(running === true){   
        return;
    }
    console.log("ik ben bijna aan het tellen")
    running = true;  /* dit zrgt er voor dat de start functie niet nog een keer geactiviird word */ 
        timer = setInterval(function(){ /* het zet de code er onder in beweging */
        seconds = seconds + 1; 
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds; /*dit laat die zien in de html*/
    }, 100); /*dit os on miliseconden, 1000 ms is 1 seconde*/
}

stopButten.onclick = function(){
    clearInterval(timer);   /* dit stopt de werk van de setinterval dus de code die er onder zit en dan zet het de kode wat onder de clearintervel aan het werk*/
    running = false; /*  dit deactiveerd de code onder de running = true waardoor als je opnieuw op running = true clickt dan multiplyed er niks en alles opnieuw in beweging gezet word */ 
}

resetButton.onclick = function(){
    clearInterval(timer);  /* dit stopt de werk van de setinterval dus de code die er onder zit en dan zet het de kode wat onder de clearintervel aan het werk*/
    seconds = 0;
    minutes = 0;
    running = false;  /*  dit deactiveerd de code onder de running = true waardoor als je opnieuw op running = true clickt dan multiplyed er niks en alles opnieuw in beweging gezet word */ 
    minutesTimer.innerText = minutes;
    secondsTimer.innerText = seconds;
    
    
}

/* hier begint de slider*/ 
const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");

slider.value = "2";
rangeValue.innerText = slider.value + "x";


slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize =slider.value + "rem";
}

const paragraph = document.getElementById("js--text");
const img = document.getElementById("js--image");

//data ophalen
let data = fetch("../data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            paragraph.innerHTML = echteData.text;
            img.setAttribute('src',echteData.img); 
        }
    );






