import {Pipe, PipeTransform} from '@angular/core';
import {Task} from "../model/Task";
import {Category} from "../model/Category";

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: Task[], category: Category | null): Task[] {
    if (category != null) {
      return tasks
        .filter(task => task.category?.title === category.title); //category - title
    } else
      return tasks
  }
}
