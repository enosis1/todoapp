import Task from "./modules/Task";
import Project from "./modules/Project";
import { displayProjectTasks, displayAllTasks } from "./modules/displayTasks";
import { projectsArray } from "./modules/projectsArray";
import displayNewTaskModal from "./modules/displayNewTaskModal";
import clearPage from "./modules/clearPage";
import displayProjects from "./modules/displayProjects";
import displayProjectModal from "./modules/displayProjectModal";
import clearTaskModal from "./modules/clearTaskModal";
import clearProjectModal from "./modules/clearProjectModal";
import handleEventListeners from "./modules/handleEventListeners";
import deleteTaskfromDOM from "./modules/deleteTaskfromDOM";
import "./css/styles.css";

displayProjects(projectsArray);
displayProjectTasks(projectsArray[1]);
displayNewTaskModal();
displayProjectModal();

const taskModal = document.querySelector(".task-modal");
const newTaskBtn = document.querySelector(".add-task");
const createTaskBtn = document.querySelector(".create-task");
const cancelTaskBtn = document.querySelector(".cancel-task");

const projectModal = document.querySelector(".project-modal");
const newProjectBtn = document.querySelector(".project-button");
const createProjectBtn = document.querySelector(".create-project");
const cancelProjectBtn = document.querySelector(".cancel-project");

newProjectBtn.addEventListener("click", () => {
  projectModal.showModal();
});

createProjectBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const projectTitle = document.querySelector(".project-text-input").value;
  const newProject = new Project(projectTitle);

  projectsArray.push(newProject);
  const projectsSidebar = document.querySelector("#sidebar > div > div");
  projectsSidebar.replaceChildren();
  displayProjects(projectsArray);
  clearPage();
  displayProjectTasks(newProject);
  projectModal.close();
});

cancelProjectBtn.addEventListener("click", () => {
  clearProjectModal();
  projectModal.close();
});

newTaskBtn.addEventListener("click", () => {
  taskModal.showModal();
});

createTaskBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const currentProject = document.querySelector(
    ".current-project-name",
  ).textContent;

  const currentLocation = projectsArray.findIndex(
    (project) => project.title === currentProject,
  );

  const taskTitle = document.querySelector(".task-text-input").value;
  const taskDate = document.querySelector(".date-input").value;
  const taskPriority = document.querySelector(".prio-input").value;

  const task = new Task(taskTitle, "", taskDate, taskPriority);
  projectsArray[currentLocation].insertTask(task);
  clearPage();
  displayProjectTasks(projectsArray[currentLocation]);
  handleEventListeners();
  taskModal.close();
  console.log(projectsArray);
});

cancelTaskBtn.addEventListener("click", () => {
  taskModal.close();
  clearTaskModal();
});

deleteTaskfromDOM();
handleEventListeners();

const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
  clearPage();
  displayAllTasks();
});
