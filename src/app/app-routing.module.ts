import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistraionComponent } from './registraion/registraion.component';

const routes: Routes = [{path:'', component: HomeComponent}, {path:'signup', component: RegistraionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
