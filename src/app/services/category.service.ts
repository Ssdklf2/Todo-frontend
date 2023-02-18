import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // subject = new BehaviorSubject<Category[]>(TestData.categories)
  //
  // getCategories(): void {
  //   return this.subject.next(TestData.categories)
  // }
  private readonly categoriesPath: string

  constructor(
    private http: HttpClient
  ) {
    this.categoriesPath = "http://localhost:8080/categories"
  }

  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesPath)
  }

  public save(task: Category) {
    return this.http.post<Category>(this.categoriesPath, task)
  }
}
