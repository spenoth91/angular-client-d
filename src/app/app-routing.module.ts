import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {PropertyListComponent} from "./users/components/property-list/property-list.component";



const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'property', component: PropertyListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
