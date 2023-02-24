import {Injectable, Input} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Actions} from "../model/enums/Actions";
import {Task} from "../model/Task";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisibleCreateTask$ = new BehaviorSubject<boolean>(false)
  isVisibleChangeTask$ = new BehaviorSubject<boolean>(false)
  selectedTask$ = new Subject<Task | null>()
  onChangeMod$ = new BehaviorSubject<boolean>(false)
  @Input() task: Task

  constructor() {
  }

  open(action: Actions) {
    if (action === Actions.CREATE_TASK) {
      console.log("CREATE TASK")
      this.isVisibleCreateTask$.next(true)
      this.onChangeMod$.next(false)
    } else if (action === Actions.MODIFY_TASK) {
      console.log("MODIFY TASK")
      this.onChangeMod$.next(true)
      console.log('!!!:' + this.task.title)
      this.isVisibleChangeTask$.next(true)
    }
  }


  close(action: Actions) {
    switch (action) {
      // @ts-ignore
      case Actions.CREATE_TASK:
        this.isVisibleCreateTask$.next(false)
        this.onChangeMod$.next(false)
        break
      case Actions.MODIFY_TASK:
        this.isVisibleChangeTask$.next(false)
        this.onChangeMod$.next(false)
        break
    }
  }
}

