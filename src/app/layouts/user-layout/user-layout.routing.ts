import { Routes } from "@angular/router";

import { SearchProductComponent } from "src/app/pages/searchProduct/searchProduct.component";
import { AdditemComponent } from "src/app/pages/additem/additem.component";
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
    path: "seller_details",
    component: SellerDetailsComponent,
  },
  {
    path: "forgot_password",
    component: ForgotPasswordComponent,
  },
  {
    path: "change_password",
    component: ChangePasswordComponent,
  },
  {
    path: "product",
    component: ProductComponent,
  },
  {
    path: "additem",
    component: AdditemComponent,
  },
  {
    path: "item_complain",
    component: ItemreportComponent,
  },
  {
    path: "complain_details",
    component: ComplainDetailsComponent,
  },
  {
    path: "user_profile/:id",
    component: UserProfileComponent,
  },
  {
    path: "seller_verification",
    component: SellerVerificationComponent,
  },
  {
    path: "user_history",
    component: UserHistoryComponent,
  },
  {
    path: "favouritelist",
    component: FavouritelistComponent,
  },
  {
    path: "notifications",
    component: NotificationPageComponent,
  },
];
