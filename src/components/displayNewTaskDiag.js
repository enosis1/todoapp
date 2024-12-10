export default function displayNewTaskDiag() {
  const body = document.querySelector("body");
  const dialogWindow = document.createElement("dialog");

  const formContainer = document.createElement("form");
  const textContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const prioContainer = document.createElement("div");
  const textLabel = document.createElement("label");
  const textInput = document.createElement("input");
  const dateLabel = document.createElement("label");
  const dateInput = document.createElement("input");
  const prioLabel = document.createElement("label");
  const prioSelect = document.createElement("select");

  const buttonContainer = document.createElement("div");
  const addTaskBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  //Classes
  dialogWindow.classList.add("modal");
  formContainer.classList.add("dialog-form");
  textLabel.classList.add("label", "text-label");
  prioLabel.classList.add("label", "prio-label");
  dateLabel.classList.add("label", "date-label");
  textInput.classList.add("modal-input");
  dateInput.classList.add("dialog-input");
  prioSelect.classList.add("prio-input");
  textContainer.classList.add("dialog-text-container");
  dateContainer.classList.add("dialog-date-container");
  prioContainer.classList.add("dialog-prio-container");
  buttonContainer.classList.add("dialog-btns");
  addTaskBtn.classList.add("create-task");
  cancelBtn.classList.add("cancel-task");

  prioLabel.textContent = "Priority: ";
  textLabel.textContent = "Task: ";
  dateLabel.textContent = "Due: ";
  dateInput.type = "date";
  textInput.type = "text";
  textInput.placeholder = "What's your new task?";
  addTaskBtn.textContent = "Create Task";
  cancelBtn.textContent = "Cancel";

  textLabel.htmlFor = "task";
  textInput.id = "task";
  dateLabel.htmlFor = "date";
  dateInput.id = "date";
  prioLabel.htmlFor = "priority";
  prioSelect.id = "priority";

  // Prio Options
  const priorityOne = document.createElement("option");
  priorityOne.value = "One";
  priorityOne.textContent = "One";
  const priorityTwo = document.createElement("option");
  priorityTwo.value = "Two";
  priorityTwo.textContent = "Two";
  const priorityThree = document.createElement("option");
  priorityThree.value = "Three";
  priorityThree.textContent = "Three";

  prioSelect.appendChild(priorityOne);
  prioSelect.appendChild(priorityTwo);
  prioSelect.appendChild(priorityThree);

  textContainer.appendChild(textLabel);
  textContainer.appendChild(textInput);
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(dateInput);
  prioContainer.appendChild(prioLabel);
  prioContainer.appendChild(prioSelect);
  buttonContainer.appendChild(addTaskBtn);
  buttonContainer.appendChild(cancelBtn);
  dialogWindow.appendChild(formContainer);
  formContainer.appendChild(textContainer);
  formContainer.appendChild(dateContainer);
  formContainer.appendChild(prioContainer);
  dialogWindow.appendChild(buttonContainer);

  body.append(dialogWindow);
}