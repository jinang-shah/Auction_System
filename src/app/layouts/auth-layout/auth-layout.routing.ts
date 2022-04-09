import { Routes } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    
];
