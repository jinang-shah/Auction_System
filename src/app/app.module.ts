import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { SellerVerificationComponent } from './pages/seller-verification/seller-verification.component';
import { UserHistoryComponent } from './pages/user-history/user-history.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductComponent } from 'src/app/pages/product/product.component';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SellerVerificationComponent,
    UserHistoryComponent,
    ProductComponent,
    UserLayoutComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
