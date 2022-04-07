import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminProductComponent } from 'src/app/pages/admin-product/admin-product.component';
import { SellerVerificationComponent } from 'src/app/pages/seller-verification/seller-verification.component';
import { UserHistoryComponent } from 'src/app/pages/user-history/user-history.component';


export const AdminLayoutRoutes: Routes = [
    // { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path:'admin_products', component:AdminProductComponent},
    // { path: 'seller-verification', component: SellerVerificationComponent },
    // { path: 'user-history', component: UserHistoryComponent }
];
