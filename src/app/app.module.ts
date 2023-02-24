import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoryComponent} from './components/category/category.component';
import {TaskComponent} from './components/task/task.component';
import {HighlighterDirective} from './directives/highlighter.directive';
import {ColorChangerDirective} from './directives/color-changer.directive';
import {HttpClientModule} from "@angular/common/http";
import {CreateTaskComponent} from './components/create-task/create-task.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FilterTasksPipe} from './pipes/filter-tasks.pipe';
import {ModalComponent} from './components/modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TaskComponent,
    HighlighterDirective,
    ColorChangerDirective,
    CreateTaskComponent,
    FilterTasksPipe,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
