import Task from "./modules/Task";
import Project from "./modules/Project";
import displayMainContent from "./modules/displayMainContent";
import displayProjectTasks from "./modules/displayProjectTasks";
import projects from "./modules/projects";
import displayAllTasks from "./modules/displayAllTasks";
import displayAllProjectTitles from "./modules/displayAllProjectTitles";
import { format } from "date-fns";
import displayTodayTasks from "./modules/displayTodayTasks";
import clearMainDOM from "./modules/clearMainDOM";

// Generates the Main Content DOM nodes.
displayMainContent();

// Displays the Test Projects which is at position 0 in the projects array
//displayProjectTasks(projects[0]);

// Displays all the project's tasks
const allTasksBtn = document.querySelector(".all-tasks-button");
allTasksBtn.addEventListener("click", () => {
  clearMainDOM();
  displayAllTasks(projects);
});

// Displays all the user created project titles
//displayAllProjectTitles(projects);

// Displays all the tasks with todays date
//displayTodayTasks(projects)
