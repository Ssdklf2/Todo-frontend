import {Category} from "./Category";
import {Priority} from "./Priority";

export class Task {
  title: string
  completed: boolean
  category?: Category
  priority?: Priority
  date?: Date

  constructor(title: string, completed: boolean, category?: Category, priority?: Priority, date?: Date) {
    this.title = title;
    this.completed = completed;
    this.category = category;
    this.priority = priority;
    this.date = date;
  }
}
