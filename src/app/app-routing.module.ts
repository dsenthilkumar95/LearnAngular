import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicAngularComponent } from './basic-angular/basic-angular.component';

const routes: Routes = [
  {
    path : "basicAngular",
    component : BasicAngularComponent
  },
  {
    path : "",
    redirectTo : "basicAngular",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
