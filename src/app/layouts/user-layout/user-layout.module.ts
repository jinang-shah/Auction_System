import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClipboardModule } from "ngx-clipboard";
import { HttpClientModule } from "@angular/common/http";
import { UserLayoutRoutes } from "./user-layout.routing";
import { AdditemComponent } from "src/app/pages/additem/additem.component";
import { ChangePasswordComponent } from "src/app/pages/change-password/change-password.component";
import { ComplainDetailsComponent } from "src/app/pages/complain-details/complain-details.component";
import { ForgotPasswordComponent } from "src/app/pages/forgot-password/forgot-password.component";
import { ItemreportComponent } from "src/app/pages/itemreport/itemreport.component";
import { ProductComponent } from "src/app/pages/product/product.component";
import { ResetPasswordComponent } from "src/app/pages/reset-password/reset-password.component";
import { SellerDetailsComponent } from "src/app/pages/seller-details/seller-details.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SellerVerificationComponent } from "src/app/pages/seller-verification/seller-verification.component";
import { SearchProductComponent } from "src/app/pages/searchProduct/searchProduct.component";
import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { UserProfileComponent } from "src/app/pages/user-profile/user-profile.component";
import { UserHistoryComponent } from "src/app/pages/user-history/user-history.component";
import { NotificationPageComponent } from "src/app/pages/notification-page/notification-page.component";
import { NotificationComponent } from "src/app/pages/notification-page/notificationPage/notification/notification.component";
import { ComponentsModule } from "src/app/components/components.module";
import { NgxPaginationModule } from "ngx-pagination";
import { ImgSrcPipe } from "src/app/pages/product/img-src.pipe";
// import { Injectable } from "@angular/core";
// import { ToastrModule } from 'ngx-toastr';
// @Injectable({
//   providedIn: 'root'
// })
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    ReactiveFormsModule,
    ComponentsModule,
    NgbModule,
    ClipboardModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  declarations: [
    HomepageComponent,
    SearchProductComponent,
    ResetPasswordComponent,
    SellerDetailsComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ProductComponent,
    AdditemComponent,
    ItemreportComponent,
    ComplainDetailsComponent,
    UserProfileComponent,
    SellerVerificationComponent,
    UserHistoryComponent,
    NotificationPageComponent,
    NotificationComponent,
    ImgSrcPipe,
  ],
  providers: [],
})
export class UserLayoutModule {}
