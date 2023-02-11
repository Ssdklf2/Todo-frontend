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

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.categories = this.dataHandler.getCategories()
    console.log(this.categories)
  }

}
