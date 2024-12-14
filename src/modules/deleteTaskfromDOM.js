import { projectsArray } from "./projectsArray";

export default function deleteTaskfromDOM() {
  const content = document.querySelector("#content");
  content.addEventListener("click", (event) => {
    if (event.target.parentNode.parentNode.classList.value == "task") {
      const projectName = document.querySelector(
        ".current-project-name",
      ).textContent;

      console.log(projectName);
      const currentTask = event.target.parentNode.parentNode;
      const currentTaskName =
        currentTask.querySelector(".task-name").textContent;

      const currentProjectIndex = projectsArray.findIndex(
        (project) => project.title === projectName,
      );

      const foundTask = projectsArray[currentProjectIndex].tasks.find(
        (task) => task.title === currentTaskName,
      );
      projectsArray[currentProjectIndex].deleteTask(foundTask);
      console.log(projectsArray);
      currentTask.remove();
    }
  });
}
