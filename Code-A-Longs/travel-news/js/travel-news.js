// Structure
// ---------------------- //
  var parent = document.querySelector(".sponsored-articles");

// Event Handler
// ---------------------- //
  function createItem() {


// Step One: Create
  var child = document.createElement("li");

  // Step Two: Bedazzle (Add Content & Attributes)
  child.textContent = "Trump wins 37 states! NEW USA PREZ!!";
  child.classList.add('new');
  child.setAttribute('src', 'img/logo.jpg');

  // Step Three: add to DOM Tree
  parent.appendChild(child);

}
