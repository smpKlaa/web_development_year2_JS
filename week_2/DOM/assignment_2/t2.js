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
const listElement = document.querySelector("ul");

for (const item of todoList) {
  const listItemElement = document.createElement("li");
  const inputElement = document.createElement("input");
  const labelElement = document.createElement("label");

  (inputElement.id = "todo-"), item.id;
  inputElement.type = "checkbox";
  inputElement.checked = item.completed;

  (labelElement.htmlFor = "todo-"), item.id;
  labelElement.textContent = item.task;

  listItemElement.appendChild(inputElement);
  listItemElement.appendChild(labelElement);

  listElement.appendChild(listItemElement);
}
