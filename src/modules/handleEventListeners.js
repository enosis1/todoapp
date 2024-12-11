import { projects } from "./projectsArray.js";
import clearPage from "./clearPage.js";
import displayProjectTasks from "./displayProjectTasks.js";

export function handleEventListeners() {
  const projectsSidebar = document.querySelector("#sidebar > div > div");

  // Use a single event listener on the parent container
  projectsSidebar.addEventListener("click", (event) => {
    // Check if the clicked element has the 'created-projects' class
    if (event.target.classList.contains("created-projects")) {
      const currentProject = event.target.textContent.trim();
      console.log(currentProject);

      const currentLocation = projects.findIndex(
        (project) => project.title === currentProject,
      );

      console.log(currentLocation);
      clearPage();
      displayProjectTasks(projects[currentLocation]);
    }
  });
}
