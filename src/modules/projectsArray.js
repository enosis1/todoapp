import Project from "./Project";
import Task from "./Task";

export let projectsArray = [new Project("Bug Fixes"), new Project("Todo App")];
const task = new Task("Finish Dom", "Test Desc", new Date("2024-12-31"), 3);
const taskTwo = new Task("Fix Bug Dom", "Test Desc", new Date("2024-12-31"), 3);
projectsArray[1].insertTask(task);
projectsArray[0].insertTask(taskTwo);
