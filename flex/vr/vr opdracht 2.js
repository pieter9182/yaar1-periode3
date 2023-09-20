const redSphere = document.getElementById("js--sphere--red");
const cursor = document.getElementById("js--cursor");

redSphere.onmouseleave = function(){
    cursor.setAttribute("color", "red");
}

const box = document.getElementById("js--box ");
box.onmouseenter = function(){
    box.setAttribute("color", "red" )
}