import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {Actions} from "../../model/enums/Actions";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() name: string
  action = Actions


  constructor(public modalService: ModalService) {
  }

  ngOnInit(): void {
  }

}
