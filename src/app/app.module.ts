import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ManageusersComponent } from './pages/manageusers/manageusers.component';
import { ComplainComponent } from './pages/complain/complain.component';
import { FavouritelistComponent } from './pages/favouritelist/favouritelist.component';

import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SellerDetailsComponent } from './pages/seller-details/seller-details.component';
import { AdditemComponent } from './pages/additem/additem.component';
import { ItemreportComponent } from './pages/itemreport/itemreport.component';
import { ComplainDetailsComponent } from './pages/complain-details/complain-details.component';
import { SellerVerificationComponent } from './pages/seller-verification/seller-verification.component';
import { UserHistoryComponent } from './pages/user-history/user-history.component';
import { ProductComponent } from 'src/app/pages/product/product.component'

   

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ManageusersComponent,
    ComplainComponent,
    FavouritelistComponent,
    AdminProductComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SellerDetailsComponent,
    AdditemComponent,
    ItemreportComponent,
    ComplainDetailsComponent,
    ComplainDetailsComponent,
    ItemreportComponent,
    SellerVerificationComponent,
    UserHistoryComponent,
    ProductComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
