import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './myComp/todos/todos.component';
import { AboutComponent } from './myComp/about/about.component';
import { LoginComponent } from './myComp/login/login.component';

const routes: Routes = [
  { path: 'home', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
