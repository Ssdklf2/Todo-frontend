import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../model/Task";
import {Priority} from "../../model/Priority";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public _tasks: Observable<Task[]>

  constructor(public taskService: TaskService) {
  }


  ngOnInit() {
    this._tasks = this.taskService.findAll()
  }

  revertComplete(task: Task) {
    this.taskService.changeCompletionOfTask(task)
  }

  public getColorOfPriority(priority: Priority): string {
    let prior: string = priority;
    switch (prior) {
      case 'LOW':
        return '#a2ff9d';
      case 'MEDIUM':
        return '#81eddb'
      case 'HIGH':
        return '#ff8a8a'
      case 'VERY_HIGH':
        return '#ff0000'
      default:
        return 'white'
    }
  }
}
