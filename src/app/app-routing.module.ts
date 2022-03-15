import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{path:'', component: HomeComponent}, {path:'signup', component: RegistraionComponent}, {path:'signin', component:SignInComponent}, {path:'forgot', component: ForgotComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
