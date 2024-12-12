import { projects } from "./projectsArray";

export function deleteTaskfromDOM() {
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

      const currentProjectIndex = projects.findIndex(
        (project) => project.title === projectName,
      );

      const foundTask = projects[currentProjectIndex].tasks.find(
        (task) => task.title === currentTaskName,
      );
      projects[currentProjectIndex].deleteTask(foundTask);
      console.log(projects);
      currentTask.remove();
    }
  });
}
