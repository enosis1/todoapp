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
const taskThree = new Task(
  "Finish third Project",
  "Default Description",
  format(new Date(2024, 11, 25), "yyyy-MM-dd"),
  "High",
);
const taskFour = new Task(
  "Finsh fourth project",
  "Default Description",
  format(new Date(2024, 11, 20), "yyyy-MM-dd"),
  "High",
);
const testProject = new Project("Test Projects List");
const anotherProject = new Project("Another test Projects List");
testProject.insertTask(taskOne);
testProject.insertTask(taskTwo);
anotherProject.insertTask(taskThree);
anotherProject.insertTask(taskFour);

projects.push(testProject);
projects.push(anotherProject);
export default projects;
