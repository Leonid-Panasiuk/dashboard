import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { AllCouriersComponent } from './all-couriers/all-couriers.component';
import { AllCourierCompaniesComponent } from './all-courier-companies/all-courier-companies.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginPageComponent,
    AllUsersComponent,
    AllCompaniesComponent,
    AllCouriersComponent,
    AllCourierCompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
