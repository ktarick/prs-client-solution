import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},  // first route always
  {path: 'user/list', component: UserListComponent },
  {path: 'user/detail/:id', component: UserDetailComponent },
  {path: 'user/create', component: UserCreateComponent },
  {path: 'user/edit/:id', component: UserEditComponent },
  {path: '**', component: HomeComponent } //last route always
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
