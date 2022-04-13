import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { ItemComponent } from "./item/item.component";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule, NgbModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    ItemComponent,
    LoaderComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ItemComponent,
    SidebarComponent,
  ],
})
export class ComponentsModule {}
