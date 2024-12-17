import projects from "./projects";
import clearMainDOM from "./clearMainDOM";
import displayProjectTasks from "./displayProjectTasks";

export default function handleAddProjectTitleDOM(e) {
  if (e.target.classList.contains("user-created")) {
    const thisProjectIndex = projects.findIndex(
      (project) => project.title === e.target.textContent,
    );
    clearMainDOM();
    displayProjectTasks(projects[thisProjectIndex]);
  }
}
