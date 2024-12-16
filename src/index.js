import Task from "./modules/Task";
import Project from "./modules/Project";
import displayMainContent from "./modules/displayMainContent";
import displayProjectTasks from "./modules/displayProjectTasks";
import projects from "./modules/projects";

// Generates the Main Content DOM nodes.
displayMainContent();

// Displays the Test Projects which is at position 0 in the projects array
displayProjectTasks(projects[0]);
