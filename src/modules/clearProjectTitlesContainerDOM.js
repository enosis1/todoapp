export default function clearProjectTitlesContainerDOM() {
  const container = document.querySelector(".project-titles-container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}
