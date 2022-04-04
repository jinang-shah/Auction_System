import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ProductComponent } from './pages/product/product.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { SearchProductComponent } from "./components/searchProduct/searchProduct.component";


const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  }
  , {
    path: '',
    path: "home",
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
  { {
15
    path: 'dashboard',
16
    redirectTo: 'dashboard',
17
    pathMatch: 'full',
18
  },
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
