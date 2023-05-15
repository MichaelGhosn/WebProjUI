import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { VisionComponent } from './vision/vision.component';
import { LittleFarmComponent } from './little-farm/little-farm.component';
import {MatDividerModule} from '@angular/material/divider';
import { LoginRegisterComponent } from './login-register/login-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import {MatCardModule} from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VisionComponent,
    LittleFarmComponent,
    LoginRegisterComponent,
    StoreComponent,
    ContactComponent,
    CartComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    IvyCarouselModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
