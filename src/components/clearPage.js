export default function clearPage() {
  const currentProject = document.querySelector(".current-project");
  currentProject.replaceChildren();
  currentProject.remove()
}
