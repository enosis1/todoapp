import { format } from "date-fns";
import Task from "./Task";
import clearMainDOM from "./clearMainDOM";
import displayProjectTasks from "./displayProjectTasks";
import projects from "./projects";

export default function handleAddTaskDOM(e) {
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
}
