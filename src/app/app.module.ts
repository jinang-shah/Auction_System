import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AdditemComponent } from './pages/additem/additem.component';
import { ComplainDetailsComponent } from './pages/complain-details/complain-details.component';
import { ItemreportComponent } from './pages/itemreport/itemreport.component';
import { SellerVerificationComponent } from './pages/seller-verification/seller-verification.component';
import { UserHistoryComponent } from './pages/user-history/user-history.component';
import { CommonModule } from '@angular/common';

import { ProductComponent } from 'src/app/pages/product/product.component'


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AdditemComponent,
    ComplainDetailsComponent,
    ItemreportComponent
    SellerVerificationComponent,
    UserHistoryComponent,
    ProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
