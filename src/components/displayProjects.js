export default function displayProjects(projects) {
  // TODO: Display each project using the dom
  const projectsContainer = document.querySelector(".projects");
  const projectsHeader = document.createElement("p");
  projectsHeader.textContent = "Projects";
  projectsHeader.classList.add("project-name");
  projectsContainer.appendChild(projectsHeader);

  projects.forEach((project) => {
    const projectTitle = document.createElement("button");
    projectTitle.classList.add("project-name");
    projectTitle.textContent = `${project.title}`;
    projectsContainer.appendChild(projectTitle);
  });
}
