export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  updateTask(properties) {
    // This method is expecting an object when updating
    for (let key in properties) {
      if (this.hasOwnProperty(key)) {
        this[key] = properties[key];
      }
    }
  }
}