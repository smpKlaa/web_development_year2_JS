// array for todo list
const todoList = [
  {
    id: 1,
    task: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    task: "Learn CSS",
    completed: true,
  },
  {
    id: 3,
    task: "Learn JS",
    completed: false,
  },
  {
    id: 4,
    task: "Learn TypeScript",
    completed: false,
  },
  {
    id: 5,
    task: "Learn React",
    completed: false,
  },
];

// add your code here
const addBtn = document.getElementById("add-btn");
const listElement = document.querySelector("ul");
const newItemForm = document.querySelector("form");
const dialog = document.querySelector("dialog");

// Show modal when add item button is clicked.
addBtn.addEventListener("click", () => dialog.showModal());

// Add new todo item when modal form is submitted.
newItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskInput = document.getElementById("new-item-input");

  todoList.push({
    id: todoList.length,
    task: taskInput.value,
    completed: false,
  });

  taskInput.value = "";
  addItem(todoList[todoList.length - 1]);
  dialog.close();

  console.log("Item added.");
  console.log("TODO list: ", todoList);
});

for (const item of todoList) {
  addItem(item);
}

function addItem(todoListItem) {
  const listItemElement = document.createElement("li");
  const inputElement = document.createElement("input");
  const labelElement = document.createElement("label");
  const deleteButton = document.createElement("button");

  listItemElement.id = `item-${todoListItem.id}`;

  inputElement.id = todoListItem.id;
  inputElement.type = "checkbox";
  inputElement.checked = todoListItem.completed;
  // When checkbox is checked/unchecked. Save changes to todoList array.
  inputElement.addEventListener("change", (event) => {
    todoList.find((p) => p.id == event.target.id).completed = this.checked;
    console.log("Item completed.");
    console.log("TODO list: ", todoList);
  });

  deleteButton.textContent = "X";
  // When deleteButton is clicked. Remove list item from array and UI.
  deleteButton.addEventListener("click", () => {
    listElement.removeChild(document.getElementById(`item-${todoListItem.id}`));
    todoList.splice(todoListItem.id - 1, 1);
    console.log("Item removed.");
    console.log("TODO list: ", todoList);
  });

  labelElement.htmlFor = todoListItem.id;
  labelElement.textContent = todoListItem.task;

  listItemElement.appendChild(inputElement);
  listItemElement.appendChild(labelElement);
  listItemElement.appendChild(deleteButton);

  listElement.appendChild(listItemElement);
}
