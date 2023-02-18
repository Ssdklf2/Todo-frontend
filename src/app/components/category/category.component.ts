import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/Category";
import {CategoryService} from "../../services/category.service";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]

  constructor(public categoryService: CategoryService,
              public taskService: TaskService) {
  }

  ngOnInit() {
    this.categoryService.findAll().subscribe(categories => this.categories = categories)
  }
}
