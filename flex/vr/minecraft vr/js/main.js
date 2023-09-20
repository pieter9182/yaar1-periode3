const item = document.getElementById("js--item");
const itemGrabbed = document.getElementById("js--item--grabbed");

itemGrabbed.setAttribute("visible",false);
let grabbed = false; /* dit veroorzaakt dat de box die je hebt in je hand onzichtbaar word */

item.onmouseenter = function(){  /* hier voer ik een vunctie uit waar ik als ik op de box kijk dan word de box waar ik naar keek onzichtbaar en de box die in mijn hand onzichtbaar was weer zichtbaar*/ 
    if(item.getAttribute("visible") === true){
        item.setAttribute("visible", false);
        itemGrabbed.setAttribute("visible",true);
        grabbed = true; /* dit veroorzaakt dat de box die je in je hand heb zichtbaar weer word */
    pickaxeGrabbed.setAttribute("visible", false);
    canIChopWood = false;
    }
}


const yellowSpheres = document.getElementsByClassName("js--sphere");
const invisibleBox = document.getElementById("js--invisible--box");


for(let i = 0; i < yellowSpheres.length; i++){ /* if i = less then yellowSpheres(het ligt aan hoeveel je er hebt) then it activates the code */
    yellowSpheres[i].onmouseenter = function (){
        if(yellowSpheres[i].getAttribute("visible") === false || grabbed === false)    /*als de yellowSpheres ([i] betekend de sphere waar je overheen ging) onzichtbaar is geworden dan gaat de console.log stoppen met uitvoeren. de || betekend of en de 2de ding is dat als je niks in je had heb word de code ook niet uitgevoerd */
        {    
            return;
        }
        console.log ("ik ben een sphere");
        let position =yellowSpheres[i].getAttribute("position"); /* je zet hier de positie van een sphere waar jij overheen ben gegaan onder de naam position */
        position.y = position.y + 1;
        yellowSpheres[i].setAttribute("visible", false); /*hier word the sphere onzichtbaar */
        invisibleBox.setAttribute("position", position); /* hier roep je de positie die je had overgezet van de sphere in om het te gebruiken als de positie van de box */
        invisibleBox.setAttribute("visible", true); /* hier word de box zichtbaar */
        itemGrabbed.setAttribute("visible", false); /* dit veroorzaakt dat als je iets plaatst dan word de box in je hand weer onzichtbaar */
        grabbed = false; /* dit dat de functie boven werkt en dat dus de box in je hand onzichtbaar word */
        
    }
}

const trees = document.getElementsByClassName("js--tree");
let wood = 0;
const pickaxe = document.getElementById("js--pickaxe");
const pickaxeGrabbed = document.getElementById("js--pickaxe--invisible");
pickaxeGrabbed.setAttribute("visible", false);

pickaxe.onmouseenter = function(){
    if(pickaxe.getAttribute("visible") === true)
    pickaxe.setAttribute("visible", false);
    pickaxeGrabbed.setAttribute("visible", true);
    itemGrabbed.setAttribute("visible", false);
    canIChopWood = true;
    canIBreakStone = true;
}


let canIChopWood = false;
let canIBreakStone = false;

for(let i = 0; i <trees.length; i++){
    trees[i].onmouseenter = function(){
        if(trees[i].getAttribute("visible") === true && canIChopWood === true){  /* als de boom zichtbaar is dan word de code uitgevoert */
            trees[i].setAttribute("visible",false);  /*dit maakt de gedeelte waar je naar kijkt onzichtbaar */
            wood = wood + 1;
            document.getElementById("js--wood").innerText = wood;
        }
       
    }
    
}

const casteel = document.getElementsByClassName("js--casteel");

let stone = 0;
for(let i = 0; i < casteel.length; i++){
    casteel[i].onmouseenter = function(){
        if(casteel[i].getAttribute("visible") === true && canIBreakStone === true){
            casteel[i].setAttribute("visible", false);
            stone = stone + 1;
            document.getElementById("js--stone").innerText = stone;
        }
   }
}







