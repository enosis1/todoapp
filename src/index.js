import Task from "./modules/task";
import Project from "./modules/project";
import displayProjectTasks from "./modules/displayProjectTasks";
import displayNewTaskModal from "./modules/displayNewTaskModal";
import clearPage from "./modules/clearPage";
import "./css/styles.css";
import displayProjects from "./modules/displayProjects";
import displayProjectModal from "./modules/displayProjectModal";
import clearTaskModal from "./modules/clearModal";
import clearProjectModal from "./modules/clearProjectModal";
import { handleEventListeners } from "./modules/handleEventListeners";
import { projects } from "./modules/projectsArray";
import { deleteTaskfromDOM } from "./modules/deleteTaskfromDOM";

const task = new Task("Finish Dom", "Test Desc", new Date("2024-12-31"), 3);
projects[1].insertTask(task);

displayProjects(projects);
displayProjectTasks(projects[1]);
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

  projects.push(newProject);
  const projectsSidebar = document.querySelector("#sidebar > div > div");
  projectsSidebar.replaceChildren();
  displayProjects(projects);
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

  const currentLocation = projects.findIndex(
    (project) => project.title === currentProject,
  );

  const taskTitle = document.querySelector(".task-text-input").value;
  const taskDate = document.querySelector(".date-input").value;
  const taskPriority = document.querySelector(".prio-input").value;

  const task = new Task(taskTitle, "", taskDate, taskPriority);
  projects[currentLocation].insertTask(task);
  clearPage();
  displayProjectTasks(projects[currentLocation]);
  handleEventListeners();
  taskModal.close();
  console.log(projects);
});

cancelTaskBtn.addEventListener("click", () => {
  taskModal.close();
  clearTaskModal();
});

deleteTaskfromDOM();

handleEventListeners();
