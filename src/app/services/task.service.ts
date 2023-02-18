import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  selectedCategory: Category

  private readonly tasksPath: string
  selected: boolean;

  constructor(private http: HttpClient) {
    this.tasksPath = "http://localhost:8080/tasks"
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksPath)
  }

  public save(task: Task) {
    return this.http.post<Task>(this.tasksPath, task)
  }

  selectCategory(category: Category) {
    this.selectedCategory = category
    this.selected = true
  }

  unselectCategory() {
    this.selected = false
  }

  changeCompletionOfTask(task: Task) {
    task.completed = !task.completed
  }
}
