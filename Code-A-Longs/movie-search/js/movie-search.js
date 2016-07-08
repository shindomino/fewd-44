//Structure
// --------------------------------------
var results = document.querySelector('.results');
var form = document.querySelector('form');
var input = document.querySelector('input');

//Event Listener
// -------------
form.addEventListener('submit', getMovies);

//Event Handler
// --------------------------
function getMovies(e) {
  e.preventDefault();

  	// building the url string
  	var search = input.value;
  	var url = "http://www.omdbapi.com/?s=" + search;

  // Two JSON techniques:

  // 1. use AJAX with getJSON
  // making ajax request for data from api
  $.getJSON(url, updateMovies);
}

// Update page
// ------------------------------------
function updateMovies(json) {
	console.log('updateMovies');
	console.log(json);

  // clear it out
	results.innerHTML = "";

  json.Search.forEach(createMovies);
}

function createMovies(movie) {

	// Step 1: create markup
	var li = document.createElement('li');
  var img = document.createElement('img');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');

img.src = movie.Poster;
h2.textContent = movie.Title;
p.textContent = movie.Year;

li.appendChild(h2);
li.appendChild(p);
li.appendChild(img);
results.appendChild(li);
}
