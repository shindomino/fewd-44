
// Structure
// ------------------------------------------------
var input = document.querySelector(".task-item");
var taskButton = document.querySelector("button");
var itemsList = document.querySelector(".items");
var date = document.querySelector(".date");


// Setup
// ------------------------------------------------
var todoList = {
		tasks: []
};


// Events
// ------------------------------------------------
taskButton.addEventListener("click", submitForm);
window.addEventListener("load", reloadPage);
itemsList.addEventListener("click", changeProp);

// Event Handlers
// ------------------------------------------------

//rebuild the todo list when page is reloaded
function reloadPage(event) {

	// get the saved data from localStorage, convert to JSON
	// save it back into the JSON object (todoList)
	todoList = JSON.parse(localStorage.getItem('todoList'));

	createTodoList();
}

//event handler for when the user clicks add button
function submitForm(event) {

		var task = {
			name: input.value,
			date: date.value,
			completed: false
		};

		todoList.tasks.push(task);

		// save to local storage
		// first parameter: key name (string)
		// second parameter: JSON object
		localStorage.setItem('todoList', JSON.stringify(todoList));

		createTodoList();
}

// changes property of the task
function changeProp(event) {

	console.log("changed property "+ event.target.name);

	var name = event.target.name;

  forEach()

}

// Update Page
// -------------------------------------------------

// create the entire todo list from json data
function createTodoList() {

		// clears out the list
		itemsList.innerHTML = "";

		// adds one new task for each item in the array
		todoList.tasks.forEach(createTask);
}

// create one li on the page from a task object
function createTask(task) {

	console.log(task);

	// Step 1: Create Markup
	var addLi = document.createElement("li");
	var checkbox = document.createElement("input");
	var labelTask = document.createElement("label");
	var labelDate = document.createElement("label");

	// Step 2: Bedazzle Markup (add attributes/content)
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("name", task.name);
	labelTask.textContent = task.name;
	labelDate.textContent = "(" + task.date + ")";
	labelDate.classList.add("gray");

	// Step 3: Append new elements to DOM tree
	itemsList.appendChild(addLi);
	addLi.appendChild(checkbox);
	addLi.appendChild(labelTask);
	addLi.appendChild(labelDate);
}
