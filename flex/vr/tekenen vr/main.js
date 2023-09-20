const cursor = document.getElementById("js--cursor")
const box = document.getElementsByClassName("js--box")
const sphere = document.getElementsByClassName("js--sphere")

for(let i = 0; i < sphere.length; i++){
    sphere[i].onmouseenter = function(){
        cursor.setAttribute("color", sphere[i].getAttribute("color"));
    }
}



for(let i = 0; i < box.length; i++){
    box[i].onmouseenter = function(){
        box[i].setAttribute("color", cursor.getAttribute("color"));
    }
}