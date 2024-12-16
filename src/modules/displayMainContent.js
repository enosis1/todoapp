export default function displayMainContent() {
  const content = document.querySelector("#content");
  const main = document.createElement("div");
  main.classList.toggle("main");

  const currentProjectContainer = document.createElement("div");
  currentProjectContainer.classList.toggle("current-project-container");

  const currentProjectTitle = document.createElement("p");
  currentProjectTitle.classList.toggle("current-project-title");

  const currentProjectTasks = document.createElement("div");
  currentProjectTasks.classList.toggle("current-project-tasks");

  const addTaskButton = document.createElement("button");
  addTaskButton.classList.toggle("add-task-button");
  addTaskButton.textContent = "Add New Task";

  currentProjectContainer.appendChild(currentProjectTitle);
  main.appendChild(currentProjectContainer);
  main.appendChild(currentProjectTasks);
  content.appendChild(main);
  content.appendChild(addTaskButton);
}
