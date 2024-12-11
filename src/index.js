import Task from "./components/task";
import Project from "./components/project";
import displayProjectTasks from "./components/displayProjectTasks";
import displayNewTaskModal from "./components/displayNewTaskModal";
import clearPage from "./components/clearPage";
import "./css/styles.css";
import displayProjects from "./components/displayProjects";
import displayProjectModal from "./components/displayProjectModal";
import clearTaskModal from "./components/clearModal";
import clearProjectModal from "./components/clearProjectModal";

let projects = [new Project("Bug Fixes"), new Project("Todo App")];
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
  console.log(projects);
  console.log(projects.findIndex((project) => project.title === projectTitle));
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
  taskModal.close();
  console.log(projects);
});

cancelTaskBtn.addEventListener("click", () => {
  taskModal.close();
  clearTaskModal();
});
