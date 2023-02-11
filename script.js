let bgcolor = true;
function changeColor(){
    if(bgcolor){
    bgcolor = false;
    let Container = document.getElementById("container");
    Container.style.backgroundColor = 'white';
    }
    else{
        let Container = document.getElementById("container");
        Container.style.backgroundColor = 'aqua';
        bgcolor=true
    }
}

function addChild(){
let Container = document.getElementById("container");
Container.innerHTML += `<div id=box ><div>`;
}

function removechild(){
let Container = document.getElementById("container");
let box = document.getElementById("box");
Container.removeChild(box)
}