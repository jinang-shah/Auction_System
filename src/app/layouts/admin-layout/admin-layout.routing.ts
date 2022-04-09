import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { AdminProductComponent } from "src/app/pages/admin-product/admin-product.component";
import { ManageusersComponent } from "src/app/pages/manageusers/manageusers.component";
import { ComplainComponent } from "src/app/pages/complain/complain.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "admin-products",
    component: AdminProductComponent,
  },
  {
    path: "admin-users",
    component: ManageusersComponent,
  },
  {
    path: "admin-complain",
    component: ComplainComponent,
  },
];
