import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './menu/search.pipe';
import { FilterBasketPipe } from './basket/filter-basket.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DescriptionComponent } from './description/description.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SingUpComponent } from './auth/singUp/singUp.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './auth/login /login.component';
import { OrderComponent } from './order/order.component';
import { AuthInterceptor } from './auth/auth-iterceptor';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { ItemCardComponent } from './menu/item-card/item-card.component';
import { ToastrModule } from 'ngx-toastr';
import { MatDividerModule } from '@angular/material/divider';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BasketComponent,
    CounterComponent,
    ContactUsComponent,
    SearchPipe,
    FilterBasketPipe,
    DescriptionComponent,
    LoginComponent,
    SingUpComponent,
    OrderComponent,
    ItemCardComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width'
    }),
    MatDividerModule


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

