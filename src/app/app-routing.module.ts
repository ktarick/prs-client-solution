import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { ReviewComponent } from './request/review/review.component';

import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';

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
  
  { path: 'login',                  component: LoginComponent },

  { path: 'request/create',         component: RequestCreateComponent },
  { path: 'request/detail/:id',     component: RequestDetailComponent },
  { path: 'request/edit/:id',       component: RequestEditComponent },
  { path: 'request/list',           component: RequestListComponent },
  { path: 'request/review/list',    component: ReviewComponent},

  { path: 'requestline/create/:id', component: RequestlineCreateComponent },
  { path: 'requestline/edit/:id',   component: RequestlineEditComponent },
  { path: 'requestline/list/:id',   component: RequestlineListComponent },

  { path: 'product/create',         component: ProductCreateComponent },
  { path: 'product/detail/:id',     component: ProductDetailComponent},
  { path: 'product/edit/:id',       component: ProductEditComponent },
  { path: 'product/list',           component: ProductListComponent },

  { path: 'user/create',            component: UserCreateComponent },
  { path: 'user/detail/:id',        component: UserDetailComponent },
  { path: 'user/edit/:id',          component: UserEditComponent },
  { path: 'user/list',              component: UserListComponent },
  
  { path: 'vendor/create',          component: VendorCreateComponent },
  { path: 'vendor/detail/:id',      component: VendorDetailComponent },
  { path: 'vendor/edit/:id',        component: VendorEditComponent},
  { path: 'vendor/list',            component: VendorListComponent },
  
  
  { path: 'home',                   component: HomeComponent },
  { path: 'about',                  component: AboutComponent },
  
  { path: '**',                     component: HomeComponent } //last route always
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
