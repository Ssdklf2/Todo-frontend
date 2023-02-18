import {Category} from "./Category";
import {Priority} from "./Priority";
import {Link} from "./Link";

export class Task {
  title: string
  completed: boolean
  category?: Category
  priority?: Priority
  deadline?: string
  links: Link[]

  constructor(title: string, completed: boolean, selfLink: Link[], category?: Category, priority?: Priority, deadline?: string) {
    this.title = title;
    this.completed = completed;
    this.links = selfLink
    this.category = category;
    this.priority = priority;
    this.deadline = deadline;
  }
}
