// Get the form, input, and list elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// When the form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from refreshing

  const taskText = input.value.trim();
  if (taskText === "") return; // Don't add empty tasks

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // When clicked, mark task as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  // When delete is clicked, remove the task
  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
  });

  // Add delete button to the list item
  li.appendChild(deleteBtn);
  // Add the list item to the list
  list.appendChild(li);

  // Clear the input box
  input.value = "";
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
