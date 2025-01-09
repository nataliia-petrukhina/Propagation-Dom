const listItems = document.querySelectorAll("li");
const ulElement = document.querySelector("ul");
const secElement = document.querySelector("section");
const addBtn = document.getElementById("addItem");

function clickFunction(event) {
  console.log("Auslöser:", event.target); //wo die event beginn 
  console.log("Eventbesitzer:", event.currentTarget); // gleich wie "this" wo du Das Element addiert hast (die zweite element automatisch)
  console.log("=====================================");
}
//BUBLE DEMO
/* listItems.forEach((item) => item.addEventListener("click", clickFunction));

ulElement.addEventListener("click", clickFunction);
secElement.addEventListener("click" , clickFunction); */

function addHightliting(even){
    even.target.classList.toggle("hightlight");
}

ulElement.addEventListener("click", addHightliting);

let counter = 3;
function addElt(event){
counter++;

    ulElement.innerHTML += `<li>Listen-Item ${counter}</li>`
}

addBtn.addEventListener("click",addElt);