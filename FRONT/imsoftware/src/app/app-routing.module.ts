import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './features/user/add-user/add-user.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/add',
    component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
