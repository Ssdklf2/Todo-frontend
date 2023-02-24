import {Category} from "./Category";
import {Priorities} from "./enums/Priorities";
import {Link} from "./Link";

export class Task {
  title: string
  completed: boolean
  category?: Category
  priority?: Priorities
  deadline?: string
  links: Link[]

  constructor(title: string, completed: boolean, selfLink: Link[], category?: Category, priority?: Priorities, deadline?: string) {
    this.title = title;
    this.completed = completed;
    this.links = selfLink
    this.category = category;
    this.priority = priority;
    this.deadline = deadline;
  }
}
