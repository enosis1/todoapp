export default function displayProjects(projects) {
  // TODO: Display each project using the dom
  const projectsContiner = document.querySelector(".projects");

  projects.forEach((project) => {
    const projectTitle = document.createElement("button");
    projectTitle.classList.add("project-name");
    projectTitle.textContent = `${project.title}`;
    projectsContiner.appendChild(projectTitle);
  });
}
