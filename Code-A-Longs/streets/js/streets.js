// Structure
// ---------------------- //
var input = document.querySelector("input");
var button = document.querySelector("button");
var directions = document.querySelector(".directions");

// Setup
// ---------------------- //
var streets = [];

// Event Handler functions
// ---------------------- //
button.addEventListener('click', addStreet);

// Event Handler functions
// ---------------------- //
function addStreet(e) {

    console.log('fn addStreet');
    console.log(e);

    // Prevent Default event behavior to keep form from submitting
    e.preventDefault();

    // error validation - return early if blank
    if (input.value ==  "") {
        return;
    }
    createStreet(input.value);

    // Cleans up the input form
    input.value = "";

    streets.push(input.value);
}


// Update Page
// ---------------------- //
function createStreet(name) {
    var li = document.createElement('li');
    li.textContent = name;
    directions.appendChild(li);
}
