import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminProductComponent } from "src/app/pages/admin-product/admin-product.component";
import { ManageusersComponent } from "src/app/pages/manageusers/manageusers.component";
import { ComplainComponent } from "src/app/pages/complain/complain.component";
import { FavouritelistComponent } from "src/app/pages/favouritelist/favouritelist.component";
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    DashboardComponent,
    AdminProductComponent,
    ManageusersComponent,
    ComplainComponent,
    FavouritelistComponent,
  ],
})
export class AdminLayoutModule {}
