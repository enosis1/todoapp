import cross from "../images/cross.svg";
import { projectsArray } from "./projectsArray";
const content = document.querySelector("#content");

export function displayAllTasks() {
  projectsArray.forEach((project) => {
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.toggle("tasks-container");
    project.tasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.toggle("task");
      // Checkbox Container Elements
      const taskName = document.createElement("p");
      taskName.classList.toggle("task-name");
      taskName.textContent = `${task.title}`;

      // DueDate container elements
      const taskDueDateInput = document.createElement("input");
      taskDueDateInput.type = "date";
      taskDueDateInput.value = task.dueDate;

      const taskDueDateLabel = document.createElement("label");
      taskDueDateLabel.textContent = "By: ";
      taskDueDateLabel.htmlFor = `${task.title}-date`;

      // Edit and Delete container elements

      const deleteButtonImg = document.createElement("img");
      deleteButtonImg.src = cross;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("button", "delete-button");
      deleteButton.type = "button";

      deleteButton.appendChild(deleteButtonImg);

      taskContainer.appendChild(taskName);
      taskContainer.appendChild(taskDueDateLabel);
      taskContainer.appendChild(taskDueDateInput);
      taskContainer.appendChild(deleteButton);
      tasksContainer.appendChild(taskContainer);
      content.appendChild(tasksContainer);
    });
  });
}

export function displayProjectTasks(project) {
  // Create DOM elements
  const projectName = document.createElement("p");
  const tasksContainer = document.createElement("div");
  const currentProjectContainer = document.createElement("div");

  projectName.textContent = project.title;
  content.appendChild(projectName);

  // Add classes
  projectName.classList.add("current-project-name", "project-name");
  currentProjectContainer.classList.add("current-project");
  tasksContainer.classList.add("tasks-container");

  project.tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    // Checkbox Container Elements
    const taskName = document.createElement("p");
    taskName.classList.toggle("task-name");
    taskName.textContent = `${task.title}`;

    // DueDate container elements
    const taskDueDateInput = document.createElement("input");
    taskDueDateInput.type = "date";
    taskDueDateInput.value = task.dueDate;

    const taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.textContent = "By: ";
    taskDueDateLabel.htmlFor = `${task.title}-date`;

    // Edit and Delete container elements

    const deleteButtonImg = document.createElement("img");
    deleteButtonImg.src = cross;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button", "delete-button");
    deleteButton.type = "button";

    deleteButton.appendChild(deleteButtonImg);

    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskDueDateLabel);
    taskContainer.appendChild(taskDueDateInput);
    taskContainer.appendChild(deleteButton);
    tasksContainer.appendChild(taskContainer);
  });
  currentProjectContainer.appendChild(projectName);
  currentProjectContainer.appendChild(tasksContainer);
  content.appendChild(currentProjectContainer);

  let addTaskButton = content.querySelector(".add-task");
  if (!addTaskButton) {
    addTaskButton = document.createElement("button");
    addTaskButton.textContent = "New Task";
    addTaskButton.classList.add("button", "add-task");
    content.appendChild(addTaskButton);
  }
  content.appendChild(addTaskButton);
}
