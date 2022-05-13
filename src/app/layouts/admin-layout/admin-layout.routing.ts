import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { AdminProductComponent } from "src/app/pages/admin-product/admin-product.component";
import { ManageusersComponent } from "src/app/pages/manageusers/manageusers.component";
import { ComplainComponent } from "src/app/pages/complain/complain.component";
import { AdminGuard } from "src/app/guards/admin.guard";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ComplainDetailsComponent } from "src/app/pages/complain-details/complain-details.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "admin-products",
    component: AdminProductComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "admin-users",
    component: ManageusersComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "admin-complain",
    component: ComplainComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "complain-details/:id",
    component: ComplainDetailsComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
];
