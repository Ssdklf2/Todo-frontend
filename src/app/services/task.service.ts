import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/testData";
import {Task} from "../model/Task";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks)
  selectedCategory: Category

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:8080/tasks")
  }

  fillTasks() {
    return this.taskSubject.next(TestData.tasks)
  }

  fillTasksByCategory(category: Category) {
    this.selectedCategory = category
    return this.taskSubject.next(TestData.tasks.filter(task => task.category === category))
  }

  changeCompletionOfTask(task: Task) {
    task.completed = !task.completed
    // TestData.tasks.at(task.id).completed.;

  }
}
