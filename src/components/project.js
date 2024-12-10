export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  insertTask(task) {
    // Insert a new task into the selected project Array
    this.tasks.push(task);
  }

  deleteTask(task) {
    // Remove task from the project Array
    let indexOfTask = this.tasks.indexOf(task);
    this.tasks.splice(indexOfTask, 1);
  }
}
