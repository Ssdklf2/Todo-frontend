import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/testData";
import {Task} from "../model/Task";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks)

  constructor() {
  }

  fillTasks() {
    return this.taskSubject.next(TestData.tasks)
  }

  fillTasksByCategory(category: Category) {
    return this.taskSubject.next(TestData.tasks.filter(task => task.category === category))
  }
}
