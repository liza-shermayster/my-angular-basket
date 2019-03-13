import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  {
    path: '', redirectTo: '/menu',
    pathMatch: 'full'
  },
  { path: 'basket', component: BasketComponent },
  { path: 'contact', component: ContactUsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
