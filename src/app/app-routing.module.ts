import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DescriptionComponent } from './description/description.component';
import { SingUpComponent } from './auth/singUp/singUp.component';
import { LoginComponent } from './auth/login /login.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  {
    path: '', redirectTo: '/menu',
    pathMatch: 'full'
  },
  { path: 'basket', component: BasketComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'description/:item', component: DescriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singUp', component: SingUpComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
