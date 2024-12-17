import Task from "./modules/Task";
import Project from "./modules/Project";
import displayMainContent from "./modules/displayMainContent";
import displayProjectTasks from "./modules/displayProjectTasks";
import projects from "./modules/projects";
import displayAllTasks from "./modules/displayAllTasks";
import displayAllProjectTitles from "./modules/displayAllProjectTitles";
import displayTodayTasks from "./modules/displayTodayTasks";
import clearMainDOM from "./modules/clearMainDOM";
import { format } from "date-fns";
import handleAddTaskDOM from "./modules/handleAddTaskDOM";
import clearProjectTitlesContainerDOM from "./modules/clearProjectTitlesContainerDOM";

// Generates the Main Content DOM nodes.
displayMainContent();

// Displays all the user created project titles
displayAllProjectTitles(projects);

// Displays all the project's tasks
const allTasksBtn = document.querySelector(".all-tasks-button");
allTasksBtn.addEventListener("click", () => {
  clearMainDOM();
  displayAllTasks(projects);
});

// Displays all the tasks with todays date
const todaysTasksBtn = document.querySelector(".today-task-button");
todaysTasksBtn.addEventListener("click", () => {
  clearMainDOM();
  displayTodayTasks(projects);
});

// Displays all the user created projects task per button title
const userCreatedProjectsDiv = document.querySelector(".project-titles-container");
userCreatedProjectsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("user-created")) {
    const thisProjectIndex = projects.findIndex(
      (project) => project.title === e.target.textContent,
    );
    clearMainDOM();
    displayProjectTasks(projects[thisProjectIndex]);
  }
});

// Handles the Add Task Button
const addTaskModalBtn = document.querySelector(".add-task-modal-button");
const addTaskBtn = document.querySelector(".add-task-button");
const addTaskModal = document.querySelector(".add-task-modal");
const cancelTaskBtn = document.querySelector(".cancel-task-button");
addTaskModalBtn.addEventListener("click", () => {
  addTaskModal.showModal();
  console.log(projects);
});

addTaskBtn.addEventListener("click", (e) => {
  handleAddTaskDOM(e);
  addTaskModal.close();
});
cancelTaskBtn.addEventListener("click", () => {
  addTaskModal.close();
});

// Handles the Add Project Button
const addProjectModalBtn = document.querySelector(".add-project-modal-button");
const addProjectBtn = document.querySelector(".add-project-button");
const addProjectModal = document.querySelector(".add-project-modal");
const cancelProjectBtn = document.querySelector(".cancel-project-button");
addProjectModalBtn.addEventListener("click", () => {
  addProjectModal.showModal();
});
addProjectBtn.addEventListener("click", () => {
  const newProjectInput = document.querySelector("#new-project-input").value;
  const newProject = new Project(newProjectInput);
  projects.push(newProject);
  clearProjectTitlesContainerDOM();
  displayAllProjectTitles(projects);
});
cancelProjectBtn.addEventListener("click", () => {
  addProjectModal.close();
});
