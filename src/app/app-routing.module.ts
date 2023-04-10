import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'dash' ,component:DashboardComponent},
  {
    path:'nav',component:NavbarComponent
  },
  {
    path:'',component:LandingComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
