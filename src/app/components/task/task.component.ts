import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[]

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.taskSubject.subscribe(tasks => this.tasks = tasks)
  }

  revertComplete(task: Task) {
    this.taskService.changeCompletionOfTask(task)
  }
}
