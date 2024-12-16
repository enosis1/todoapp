import Task from "./modules/Task";
import Project from "./modules/Project";
import displayMainContent from "./modules/displayMainContent";
import displayProjectTasks from "./modules/displayProjectTasks";
import projects from "./modules/projects";

// Generates the Main Content DOM nodes.
displayMainContent();
console.log(projects);
displayProjectTasks(projects[0]);
