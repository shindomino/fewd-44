// Structure
// ---------

var results = document.querySelector('.results');


// Update page
// ---------
function createRestaurant(restuarant) {

  //create markup
  var li = document.createElement('li');
  var h2 = document.createElement('h2');
  var p = document.createElement('p');

  //add content / attributes
  h2.textContent = restuarant.name;
  p.textContent = restuarant.street_address;

  //updates page with new restuarant
  li.appendChild(h2);
  li.appendChild(p);
  results.appendChild(li);

}
