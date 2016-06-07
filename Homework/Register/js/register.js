var item = document.querySelector(".item-cost");
var button = document.querySelector("button");
var input = document.querySelector(".input");
var total = document.querySelector(".total");
var totalValue = 0;

// Events //
// -------------------------//
 button.addEventListener("click", addItem);

// Event Handler Functions //
//-------------------------//
function addItem(e) {
  e.preventDefault();

  //If the Input is NaN
  if (isNaN(item.value) === true ) {
      console.log("NaN or nah");

      //Tidy Up
      item.value = "";
      return;
  }

  // Run register //
  // ------------------------//
  else {
    createItem(item.value);
    calculateTotal(item.value);
    item.value = "";
  }


}

function calculateTotal(x) {
  x = parseFloat(x);
  totalValue = totalValue + x;
  createTotal(totalValue.toFixed(2));
}

 // Update Page //
 // ----------------------//
 function createItem(entry) {
   console.log("Create an Item");

   var li = document.createElement("li");
   li.textContent = parseFloat(entry).toFixed(2);
   input.appendChild(li);
 }

 function createTotal(y) {
   total.textContent = y;
 }
