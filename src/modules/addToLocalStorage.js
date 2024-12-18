export default function addToLocalStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}
