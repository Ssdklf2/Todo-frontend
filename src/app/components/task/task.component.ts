import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[]

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.tasks = this.dataHandler.getTasks()
  }

}
