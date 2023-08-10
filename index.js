//document.getElementById("count-el").innerText = 5;
// getting the HTML element
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// initialise count as 0 a.k.a store count somewhere
let count = 0;
// listen for clicks on increment button
function increment() {
  count += 1; // increment count variable wwhen the button is clicked
  countEl.textContent = count; // modifying the HTML element
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  // to restart counter after each save
  countEl.textContent = 0;
  count = 0;
}
