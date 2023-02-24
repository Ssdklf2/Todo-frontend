import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  tasks: Task[]

  selectedCategory: Category

  private readonly tasksPath: string
  selected: boolean;

  constructor(private http: HttpClient) {
    this.tasksPath = "http://localhost:8080/tasks"
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksPath)
      .pipe(
        tap(tasks => this.tasks = tasks)
      )
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksPath, task, httpHeaders)
      .pipe(
        tap(newTask => this.tasks.push(newTask))
      )
  }

  public deleteTask(task: Task): Observable<Task> {
    let href = task.links.filter(value => value.rel == "self").pop()?.href;
    console.log(href)
    if (href !== undefined) {
      return this.http.delete<Task>(href)
    } else throw Error("Undefined selflink in deleteTask()") //TODO Error
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


  changeTask(task: Task): Observable<Task> {
    let href = task.links.filter(value => value.rel == "self").pop()?.href;
    if (href !== undefined) {
      return this.http.put<Task>(href, task)
    } else throw Error('Undefined self link in changeTask()') //TODO Error
  }
}
