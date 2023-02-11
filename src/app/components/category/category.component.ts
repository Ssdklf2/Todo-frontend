import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]

  constructor(public dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.categories = this.dataHandlerService.getCategories()
    console.log(this.categories)
  }

}
