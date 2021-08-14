let paragraf = document.querySelector("p");

function setBackground(){
paragraf.style.background ="red";
paragraf.nextElementSibling.style.background = "yellow";
}
document.querySelector("button").addEventListener("click",setBackground);

//drugie rozwiązanie

let paragraf1 = document.querySelector(".p1");
let paragraf2 = document.querySelector(".p2");




function setBackground(){
paragraf1.className = "red";
paragraf2.className = "yellow";
}
document.querySelector("button").addEventListener("click",setBackground);