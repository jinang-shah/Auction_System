<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { ManageusersComponent } from './pages/manageusers/manageusers.component';
import { ComplainComponent } from './pages/complain/complain.component';
import { FavouritelistComponent } from './pages/favouritelist/favouritelist.component';

import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SellerDetailsComponent } from './pages/seller-details/seller-details.component';
import { AdditemComponent } from './pages/additem/additem.component';
import { ItemreportComponent } from './pages/itemreport/itemreport.component';
import { ComplainDetailsComponent } from './pages/complain-details/complain-details.component';
import { ProductComponent } from './pages/product/product.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { SearchProductComponent } from "./components/searchProduct/searchProduct.component";
// import { NotificationsComponent } from "./components/notifications/notifications.component";
=======
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HttpClient } from "@angular/common/http";
>>>>>>> development

import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { AdminGuard } from "./guards/admin.guard";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
<<<<<<< HEAD
  {

    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'reset-password', component: ResetPasswordComponent },

  
  { path: 'seller-details', component: SellerDetailsComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },


  { path: 'change-password', component: ChangePasswordComponent },
  {
    path:'product',
    component:ProductComponent
  },
  // {
  //   path: "notifications",
  //   component: NotificationsComponent,
  // }
  ,{
    path:'additem',
    component : AdditemComponent
  },
  {
    path:'item_complain',
    component : ItemreportComponent
  },{
    path:'complain_details',
    component : ComplainDetailsComponent
  }, 
  {
    path:'complian-details',
    component : ComplainDetailsComponent
  },
  {
    path:'itemreport',
    component : ItemreportComponent
  },
  
  {
    path:'admin_users',
    component:ManageusersComponent
  },{
      path:'admin_complain',
      component: ComplainComponent
  },
  {
      path:'admin_favouritelist',
      component: FavouritelistComponent
  },
  // }, {
  //   path: '',
  //   component: HomepageComponent,
  // },
  {
    path: "search",
    component: SearchProductComponent,
=======
  {
    path: "",
    component: UserLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/user-layout/user-layout.module").then(
            (m) => m.UserLayoutModule
          ),
      },
    ],
>>>>>>> development
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/auth-layout/auth-layout.module").then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
