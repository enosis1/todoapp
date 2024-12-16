import { format } from "date-fns";

export default function displayTodayTasks(projects) {
  const today = format(new Date(), "yyyy-MM-dd");
  const main = document.querySelector(".main");
  const currentProjectContainer = document.createElement("div");
  currentProjectContainer.classList.toggle("current-project-container");
  const currentProjectTitle = document.createElement("p");
  currentProjectTitle.classList.toggle("current-project-title");
  currentProjectTitle.textContent = "Today's Tasks";
  const currentProjectTasks = document.createElement("div");
  currentProjectTasks.classList.toggle("current-project-tasks");
  currentProjectContainer.appendChild(currentProjectTitle);
  main.appendChild(currentProjectContainer);
  main.appendChild(currentProjectTasks);
  projects.forEach((project) => {
    const todaysTasks = project.tasks.filter((task) => task.dueDate == today);
    todaysTasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.toggle("task-container");
      const taskTitle = document.createElement("p");
      taskTitle.classList.toggle("task-title");
      taskTitle.textContent = task.title;
      const taskDueDateContainer = document.createElement("div");
      taskDueDateContainer.classList.toggle("task-due-date-container");
      const taskDueDateLabel = document.createElement("label");
      taskDueDateLabel.classList.toggle("task-due-date-label");
      const taskDueDateInput = document.createElement("input");
      taskDueDateInput.classList.toggle("task-due-date-input");
      taskDueDateInput.type = "date";
      taskDueDateInput.value = `${task.dueDate}`;
      taskDueDateInput.name = `${project.title}-due-date`;
      taskDueDateInput.htmlFor = `${project.title}-due-date`;
      const taskPriorityContainer = document.createElement("div");
      taskPriorityContainer.classList.toggle("task-priority-container");
      const taskPriority = document.createElement("p");
      taskPriority.textContent = task.priority;

      taskDueDateContainer.appendChild(taskDueDateLabel);
      taskDueDateContainer.appendChild(taskDueDateInput);
      taskPriorityContainer.appendChild(taskPriority);
      taskContainer.appendChild(taskTitle);
      taskContainer.appendChild(taskDueDateContainer);
      taskContainer.appendChild(taskPriorityContainer);
      currentProjectTasks.appendChild(taskContainer);
    });
  });
}
