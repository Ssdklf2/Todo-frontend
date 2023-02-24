import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../model/Task";
import {Actions} from "../../model/enums/Actions";
import {Priorities} from "../../model/enums/Priorities";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  action = Actions

  // public _tasks: Observable<Task[]>

  constructor(public taskService: TaskService, public modalService: ModalService) {
  }


  ngOnInit() {
    // this._tasks = this.taskService.findAll()
    this.taskService.findAll().subscribe(() => console.log("данные загрузились"))
  }

  // addTask() {
  //   this.taskService.addTask(newTask)
  //     .subscribe(task => this._tasks.push)
  // }

  revertComplete(task: Task) {
    this.taskService.changeCompletionOfTask(task)
  }

  public getColorOfPriority(priority: Priorities): string {
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

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.ngOnInit()
    })

  }
}
