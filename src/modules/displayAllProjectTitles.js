export default function displayAllProjectTitles(projects) {
  const projectTitlesContainer = document.querySelector(
    ".project-titles-container",
  );
  const userCreatedProjects = document.createElement("div");
  userCreatedProjects.classList.toggle("user-created-projects");
  projects.forEach((project) => {
    const projectButton = document.createElement("button");
    projectButton.classList.toggle("project-button");
    projectButton.classList.toggle("project-title");
    projectButton.type = "button";
    projectButton.textContent = project.title;

    userCreatedProjects.appendChild(projectButton);
    projectTitlesContainer.appendChild(userCreatedProjects);
  });
}
