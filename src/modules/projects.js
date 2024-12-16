import Task from "./Task";
import Project from "./Project";

let projects = [];

const taskOne = new Task(
  "Finish the Project",
  "Default Description",
  new Date("2024-12-30"),
  "High",
);
const taskTwo = new Task(
  "Finsh another project",
  "Default Description",
  new Date("2024-12-30"),
  "High",
);

let testProject = new Project("Test Projects List");
testProject.insertTask(taskOne);
testProject.insertTask(taskTwo);

projects.push(testProject);
export default projects;
