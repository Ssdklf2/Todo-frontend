import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoryComponent} from './components/category/category.component';
import {TaskComponent} from './components/task/task.component';
import {HighlighterDirective} from './directives/highlighter.directive';
import {ColorChangerDirective} from './directives/color-changer.directive';
import {HttpClientModule} from "@angular/common/http";
import {CreateTaskComponent} from './components/create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterTasksPipe} from './pipes/filter-tasks.pipe';
import {ModalComponent} from './components/modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';

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
    HomeComponent,
    MainPageComponent,
    HomePageComponent,
    NavigationComponent,
    LoginComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
