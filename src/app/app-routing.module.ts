import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { LittleFarmComponent } from './little-farm/little-farm.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'home', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'vision', pathMatch: 'full', component: VisionComponent
  },
  {
    path: 'little-farm', pathMatch: 'full', component: LittleFarmComponent
  },
  {
    path: 'login', pathMatch: 'full', component: LoginRegisterComponent
  },
  {
    path: 'register', pathMatch: 'full', component: LoginRegisterComponent
  },
  {
    path: 'store', pathMatch: 'full', component: CategoriesComponent
  },
  {
    path: 'products', pathMatch: 'full', component: ProductsComponent
  },
  {
    path: 'contact', pathMatch: 'full', component: ContactComponent
  },
  {
    path: 'cart', pathMatch: 'full', component: CartComponent
  },
  { 
    path: '',   redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
