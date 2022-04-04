import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdditemComponent } from './pages/additem/additem.component';
import { ComplainDetailsComponent } from './pages/complain-details/complain-details.component';
import { ItemreportComponent } from './pages/itemreport/itemreport.component';
import { ProductComponent } from './pages/product/product.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { SearchProductComponent } from "./components/searchProduct/searchProduct.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";

const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },
  {
    path: "notifications",
    component: NotificationsComponent,
  },{
    path:'additem',
    component : AdditemComponent
  }, 
  {
    path:'complian-details',
    component : ComplainDetailsComponent
  },
  {
    path:'itemreport',
    component : ItemreportComponent
  },{
    path: '',
    component: HomepageComponent,
  },
  {
    path: "search",
    component: SearchProductComponent,
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
    redirectTo: "dashboard",
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
