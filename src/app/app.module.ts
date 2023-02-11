import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoryComponent} from './components/category/category.component';
import {TaskComponent} from './components/task/task.component';
import {HighlighterDirective} from './directives/highlighter.directive';
import {ColorChangerDirective} from './directives/color-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TaskComponent,
    HighlighterDirective,
    ColorChangerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
