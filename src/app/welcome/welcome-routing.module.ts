import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, children: [{ path: 'register', component: RegisterComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
