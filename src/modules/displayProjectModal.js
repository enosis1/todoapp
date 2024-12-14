export default function displayProjectModal(project) {
  const body = document.querySelector("body");
  const dialogWindow = document.createElement("dialog");
  const formContainer = document.createElement("form");
  const textContainer = document.createElement("div");
  const textInput = document.createElement("input");

  const buttonContainer = document.createElement("div");
  const addProjectBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  //Classes
  dialogWindow.classList.add("project-modal");
  formContainer.classList.add("dialog-form");
  textInput.classList.add("project-text-input");
  textInput.placeholder = "What's your new project name?";
  textInput.required = true;
  textContainer.classList.add("dialog-text-container");
  buttonContainer.classList.add("dialog-btns");
  addProjectBtn.classList.add("create-project");
  cancelBtn.classList.add("cancel-project");

  addProjectBtn.textContent = "Create Project";
  cancelBtn.textContent = "Cancel";
  addProjectBtn.type = "submit";
  cancelBtn.type = "button";

  textContainer.appendChild(textInput);
  buttonContainer.appendChild(addProjectBtn);
  buttonContainer.appendChild(cancelBtn);
  formContainer.appendChild(textContainer);
  formContainer.appendChild(buttonContainer);
  dialogWindow.appendChild(formContainer);
  body.appendChild(dialogWindow);
}
