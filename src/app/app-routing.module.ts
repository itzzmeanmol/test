import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "employee", component: EmployeeListComponent},
  {path: "consumer", component: ConsumerListComponent},
  {path: "**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
