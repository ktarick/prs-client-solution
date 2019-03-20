import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './user/login/login.component';

import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full'},  // first route always
  
  { path: 'login', component: LoginComponent },

  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/list', component: UserListComponent },
  
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'vendors/detail/id', component: VendorDetailComponent },
  { path: 'vendors/edit/id', component: VendorEditComponent},
  { path: 'vendors/list', component: VendorListComponent },
  
  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  
  { path: '**', component: HomeComponent } //last route always
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
