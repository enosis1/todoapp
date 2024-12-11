export default function displayProjectTasks(project) {
  const content = document.querySelector("#content");

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
    const taskCheckboxContainer = document.createElement("div");
    taskCheckboxContainer.classList.add("task-checkbox");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "isComplete";
    checkbox.value = "isComplete";
    checkbox.id = `${task.title}`;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = `${task.title}`;
    checkboxLabel.textContent = `${task.title}`;

    taskCheckboxContainer.appendChild(checkbox);
    taskCheckboxContainer.appendChild(checkboxLabel);

    // DueDate container elements
    const taskDueDateContainer = document.createElement("div");
    taskDueDateContainer.classList.add("task-due-date");
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.value = task.dueDate;

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due: ";
    dueDateLabel.htmlFor = `${task.title}date`;

    // Edit and Delete container elements
    const editAndDeleteContainer = document.createElement("div");
    editAndDeleteContainer.classList.add("edit-and-delete");

    const editButton = document.createElement("button");
    editButton.classList.add("button", "edit-button");
    editButton.textContent = "Edit";
    editButton.type = "button";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button", "delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    editAndDeleteContainer.appendChild(editButton);
    editAndDeleteContainer.appendChild(deleteButton);

    taskDueDateContainer.appendChild(dueDateLabel);
    taskDueDateContainer.appendChild(dueDateInput);

    taskContainer.appendChild(taskCheckboxContainer);
    taskContainer.appendChild(taskDueDateContainer);
    taskContainer.appendChild(editAndDeleteContainer);
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
