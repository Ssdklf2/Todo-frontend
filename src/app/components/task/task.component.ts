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

  constructor(private dataHandlerService: TaskService) {
  }

  ngOnInit() {
    this.dataHandlerService.taskSubject.subscribe(tasks => this.tasks = tasks)
  }

}
