import { createProjectBtn, projectModal } from "..";
import { projects } from "./projectsArray";
import clearPage from "./clearPage";
import displayProjects from "./displayProjects";
import displayProjectTasks from "./displayProjectTasks";
import Project from "./project";

createProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const projectTitle = document.querySelector(".project-text-input").value;
    const newProject = new Project(projectTitle);

    projects.push(newProject);
    const projectsSidebar = document.querySelector("#sidebar > div > div");
    projectsSidebar.replaceChildren();
    displayProjects(projects);
    clearPage();
    displayProjectTasks(newProject);
    projectModal.close();
});

