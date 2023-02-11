import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/testData";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  subject = new BehaviorSubject<Category[]>(TestData.categories)

  constructor() {
  }

  getCategories(): void {
    return this.subject.next(TestData.categories)
  }
}
