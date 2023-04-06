import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
