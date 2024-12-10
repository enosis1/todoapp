export default function clearModal() {
  const input = document.querySelector(".text-input");
  const date = document.querySelector(".date-input");
  const prio = document.querySelector(".prio-input");

  input.value = ''
  date.value = ''
  prio.value = 'One'
}
