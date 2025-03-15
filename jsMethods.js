let inputValue = document.querySelector(".slideVal");
let slider = document.querySelector('#slider');
inputValue.textContent = `Number of boxes: ${slider.value*slider.value}`;

let sketchContainer = document.querySelector('#sketchContainer');

slider.addEventListener('input', ()=>{
    inputValue.textContent = `Number of boxes: ${slider.value*slider.value}`;
    createDiv(parseInt(slider.value));
})

createDiv(parseInt(slider.value))

let clear = document.querySelector("#clear");
clear.addEventListener('click',()=>{createDiv(parseInt(slider.value)); })

function createDiv(numDiv){
    removeDiv();
    for(let i=0; i<numDiv;i++){
        for(let j=0; j<numDiv;j++){
            let childDiv = document.createElement('div');
            childDiv.classList.add('childDiv');
            childDiv.style.width=`${960/numDiv}px`
            sketchContainer.appendChild(childDiv);
        }
    }
}
function removeDiv(){
    while(sketchContainer.firstChild){
        sketchContainer.removeChild(sketchContainer.lastChild);
    }
}

let colorClass = 'black';
let red = document.querySelector("#red");
red.addEventListener('click',()=>colorClass='red');
let orange = document.querySelector("#orange");
orange.addEventListener('click',()=>colorClass='orange');
let yellow = document.querySelector("#yellow");
yellow.addEventListener('click',()=>colorClass='yellow');
let green = document.querySelector("#green");
green.addEventListener('click',()=>colorClass='green');
let blue = document.querySelector("#blue");
blue.addEventListener('click',()=>colorClass='blue');
let purple = document.querySelector("#purple");
purple.addEventListener('click',()=>colorClass='purple');

sketchContainer.addEventListener('mouseover',()=>{
    if(sketchContainer.firstChild){
        const allElm = document.querySelectorAll(".childDiv");
        for(let i=0; i<allElm.length; i++){
            allElm[i].addEventListener('mouseout',(element)=>{
                allElm[i].classList.add(colorClass);});
        }
    }
})


