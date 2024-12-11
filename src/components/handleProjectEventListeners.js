export default function handleProjectEventListeners() {
  const createdProjectsBtns = document.querySelectorAll(".created-projects");

  createdProjectsBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      const currentProject = btn.textContent;
      console.log(currentProject);
      const currentLocation = projects.findIndex(
        (project) => project.title === currentProject,
      );
      console.log(currentLocation);
    }),
  );
}
