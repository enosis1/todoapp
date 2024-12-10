export default function displayProjectTasks(project) {
  const content = document.querySelector("#content");

  // Create DOM elements
  const projectName = document.createElement("p");
  const tasksContainer = document.createElement("div");
  const addTaskButton = document.createElement("button");

  projectName.textContent = project.title;
  addTaskButton.textContent = "+Task";
  content.appendChild(projectName);

  // Add classes
  projectName.classList.add("project-name");
  tasksContainer.classList.add("tasks-container");
  addTaskButton.classList.add("button");

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

    taskDueDateContainer.appendChild(dueDateLabel);
    taskDueDateContainer.appendChild(dueDateInput);

    taskContainer.appendChild(taskCheckboxContainer);
    taskContainer.appendChild(taskDueDateContainer);
    content.appendChild(tasksContainer);
    tasksContainer.appendChild(taskContainer);
  });

  content.appendChild(addTaskButton);
}
