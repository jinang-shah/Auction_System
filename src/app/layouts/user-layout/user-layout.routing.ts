import { Routes } from "@angular/router";
import { SearchProductComponent } from "src/app/pages/searchProduct/searchProduct.component";
import { ChangePasswordComponent } from "src/app/pages/change-password/change-password.component";
import { ComplainDetailsComponent } from "src/app/pages/complain-details/complain-details.component";
import { ForgotPasswordComponent } from "src/app/pages/forgot-password/forgot-password.component";
import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { ItemreportComponent } from "src/app/pages/itemreport/itemreport.component";
import { ProductComponent } from "src/app/pages/product/product.component";
import { ResetPasswordComponent } from "src/app/pages/reset-password/reset-password.component";
import { SellerDetailsComponent } from "src/app/pages/seller-details/seller-details.component";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";
import { SellerVerificationComponent } from "src/app/pages/seller-verification/seller-verification.component";
import { UserHistoryComponent } from "src/app/pages/user-history/user-history.component";
import { FavouritelistComponent } from "src/app/pages/favouritelist/favouritelist.component";
import { NotificationPageComponent } from "src/app/pages/notification-page/notification-page.component";
import { AdditemComponent } from "src/app/pages/additem/additem.component";
import { AuthGuard } from "src/app/guards/auth.guard";
import { SellerGuard } from "src/app/guards/seller.guard";

export const UserLayoutRoutes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "search",
    component: SearchProductComponent,
  },
  {
    path: "reset-password/:id",
    component: ResetPasswordComponent,
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "change-password",
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "product/:id",
    component: ProductComponent,
  },
  {
    path: "additem",
    component: AdditemComponent,
    canActivate: [AuthGuard, SellerGuard],
  },
  {
    path: "item-complain/:id/:sid",
    component: ItemreportComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "user-profile/:id",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "seller-verification",
    component: SellerVerificationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "user-history",
    component: UserHistoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "favouritelist",
    component: FavouritelistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "notifications",
    component: NotificationPageComponent,
    canActivate: [AuthGuard],
  },
];
