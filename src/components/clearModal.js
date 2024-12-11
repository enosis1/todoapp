export default function clearTaskModal() {
  const input = document.querySelector(".task-text-input");
  const date = document.querySelector(".date-input");
  const prio = document.querySelector(".prio-input");

  input.value = "";
  date.value = "";
  prio.value = "One";
}
