import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { AllCourierCompaniesComponent } from './all-courier-companies/all-courier-companies.component';
import { AllCouriersComponent } from './all-couriers/all-couriers.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'all-users',
    pathMatch: 'full' 
  },
  {
    path: '',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'all-users', component: AllUsersComponent},
      {path: 'all-companies', component: AllCompaniesComponent},
      {path: 'app-all-couriers', component: AllCouriersComponent},
      {path: 'app-all-companies', component: AllCourierCompaniesComponent},
    ]
  },
  {
    path: 'login-page',
    component: LoginPageComponent   
  },
  { path: '**', redirectTo: 'all-users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

