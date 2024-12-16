export default function clearMainDOM() {
  const main = document.querySelector(".main");
  const currentProjectContainer = document.querySelector(
    ".current-project-container",
  );
  const currentProjectTasks = document.querySelector(".current-project-tasks");

  main.removeChild(currentProjectContainer)
  main.removeChild(currentProjectTasks)
}
