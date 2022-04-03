import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomepageComponent } from "./homepage/homepage.component";
import { HeaderComponent } from "./homepage/header/header.component";
import { SearchProductComponent } from "./searchProduct/searchProduct.component";
import { ItemComponent } from "./item/item.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule, NgbModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomepageComponent,
    HeaderComponent,
    SearchProductComponent,
    ItemComponent,
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
