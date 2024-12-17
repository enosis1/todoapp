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

// Displays all the user created projects
const userProjectBtns = document.querySelectorAll(".user-created");
userProjectBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const thisProjectIndex = projects.findIndex(
      (project) => project.title === button.textContent,
    );
    console.log(thisProjectIndex);

    clearMainDOM();
    displayProjectTasks(projects[thisProjectIndex]);
  });
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
  e.preventDefault();
  const newTaskInput = document.querySelector("#new-task-input").value;
  const newTaskDescription = document.querySelector("#task-description").value;
  const newTaskDueDate = document.querySelector("#due-date-input").value;
  const newTaskPriority = document.querySelector("#priority-select").value;
  const newTask = new Task(
    newTaskInput,
    newTaskDescription,
    format(new Date(newTaskDueDate), "yyyy-MM-dd"),
    newTaskPriority,
  );

  const currentProjectTitle = document.querySelector(
    ".current-project-title",
  ).textContent;

  if (
    currentProjectTitle === "" ||
    currentProjectTitle === "Today's Task" ||
    currentProjectTitle === "All Task"
  ) {
    projects[0].insertTask(newTask);
    clearMainDOM();
    displayProjectTasks(projects[0]);
  } else {
    const thisProjectIndex = projects.findIndex(
      (project) => project.title === currentProjectTitle,
    );
    projects[thisProjectIndex].insertTask(newTask);
    clearMainDOM();
    displayProjectTasks(projects[thisProjectIndex]);
  }
  addTaskModal.close();
});
cancelTaskBtn.addEventListener("click", () => {
  addTaskModal.close();
});

// Handles the Add Project Button
const addProjectBtn = document.querySelector(".add-project-button");
const addProjectModal = document.querySelector(".add-project-modal");
const cancelProjectBtn = document.querySelector(".cancel-project-button");
addProjectBtn.addEventListener("click", () => {
  addProjectModal.showModal();
});
cancelProjectBtn.addEventListener("click", () => {
  addProjectModal.close();
});
