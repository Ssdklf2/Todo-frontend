import {Link} from "./Link";

export class Category {
  title: string
  links: Link[]

  constructor(title: string, selfLink: Link[]) {
    this.title = title;
    this.links = selfLink;
  }
}
