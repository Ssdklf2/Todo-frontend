import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/Category";
import {CategoryService} from "../../services/category.service";
import {Priorities} from "../../model/enums/Priorities";
import {TaskService} from "../../services/task.service";
import {ModalService} from "../../services/modal.service";
import {Actions} from "../../model/enums/Actions";
import {Task} from "../../model/Task";
import {tap} from "rxjs";


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  categories: Category[];
  taskForm: FormGroup;
  priorities: Priorities[]
  onChangeMod: boolean
  task: Task
  title: string;


  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private taskService: TaskService,
    private modelService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.getAllCategories()
    this.getAllPriorities()
    this.createTaskForm()
  }

  createTaskForm() {
    this.modelService.onChangeMod$.pipe(tap(data => {
      console.log(data)
    })).subscribe(onChangeMod => this.onChangeMod = onChangeMod);
    if (this.onChangeMod) {
      this.task = this.modelService.task
    }
    // if (this.onChangeMod) console.log("title: " + title!.toString())
    console.log('this.onChangeMod: ' + this.onChangeMod)
    if (this.onChangeMod) console.log('selected task title: ' + this.task.title)
    if (this.onChangeMod) console.log('selected task category: ' + this.task.category)
    if (this.onChangeMod) console.log('selected task priority: ' + this.task.priority)
    if (this.onChangeMod) console.log('selected task deadline: ' + this.task.deadline)


    this.taskForm = this.formBuilder.group({

      title: [this.onChangeMod ? this.task.title : '', Validators.compose([Validators.required])],
      category: [this.onChangeMod ? this.task.category?.title : '', Validators.compose([Validators.required])],
      priority: [this.onChangeMod ? this.getButtonNameOfPriority(this.task.priority!) : 'Низкий',
        Validators.compose([Validators.required])],
      deadline: [this.onChangeMod ? this.task.deadline : ''],
      links: [this.onChangeMod ? this.task.links : null]
    })
    //  '2020-12-13'
  }

  get f() {
    return this.taskForm.controls
  }

  submit(task: any) {
    console.log(this.taskForm.value)
    if (this.onChangeMod) {
      this.taskService.changeTask(task)
        .subscribe(() => this.modelService.close(Actions.MODIFY_TASK))
      this.onChangeMod = false
    } else {
      this.taskService.addTask(task)
        .subscribe(() => this.modelService.close(Actions.CREATE_TASK))
    }
  }


  getAllCategories() {
    this.categoryService.findAll().subscribe(
      categories => this.categories = categories
    )
  }


  getAllPriorities() {
    this.priorities = Object.values(Priorities)
  }


  public getButtonNameOfPriority(value: Priorities): string {
    let priority: string = value;
    switch (priority) {
      case 'LOW':
        return 'Низкий';
      case 'MEDIUM':
        return 'Средний'
      case 'HIGH':
        return 'Высокий'
      case 'VERY_HIGH':
        return 'Очень высокий'
      default:
        return 'Низкий'
    }
  }
}
