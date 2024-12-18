import { format } from "date-fns";
import Task from "./Task";
import Project from "./Project";

function getProjects() {
  if (localStorage.getItem("projects") === null) {
    let projects = [];
    return projects;
  }
  let projects = JSON.parse(localStorage.getItem("projects"));
  return projects;
}
let projects = getProjects();

const taskOne = new Task(
  "Finish the Project",
  "Default Description",
  format(new Date(), "yyyy-MM-dd"),
  "High",
);
const defaultProject = new Project("Default Project List");
defaultProject.insertTask(taskOne);

projects.push(defaultProject);
export default projects;
