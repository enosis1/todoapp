export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }


  // This expects an object when updating
  updateTask(properties) {
    for (let key in properties) {
      if (this.hasOwnProperty(key)) {
        this[key] = properties[key];
      }
    }
  }
}
