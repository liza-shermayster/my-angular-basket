import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth-iterceptor';
import { LoginComponent } from './auth/login /login.component';
import { SignUpComponent } from './auth/signUp/signUp.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CounterComponent } from './counter/counter.component';
import { MaterialModule } from './material';
import { ItemCardComponent } from './menu/item-card/item-card.component';
import { MenuComponent } from './menu/menu.component';
import { SearchPipe } from './menu/search.pipe';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CounterComponent,
    ContactUsComponent,
    SearchPipe,
    LoginComponent,
    SignUpComponent,
    OrderComponent,
    ItemCardComponent,
    AboutUsComponent,

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

