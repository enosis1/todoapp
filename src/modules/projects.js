import { format } from "date-fns";
import Task from "./Task";
import Project from "./Project";

let projects = [];

const taskOne = new Task(
  "Finish the Project",
  "Default Description",
  format(new Date(2024, 11, 30), "yyyy-MM-dd"),
  "High",
);
const taskTwo = new Task(
  "Finsh another project",
  "Default Description",
  format(new Date(2024, 11, 30), "yyyy-MM-dd"),
  "High",
);

console.log(taskTwo);

let testProject = new Project("Test Projects List");
testProject.insertTask(taskOne);
testProject.insertTask(taskTwo);

projects.push(testProject);
export default projects;
