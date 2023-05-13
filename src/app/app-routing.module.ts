import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { LittleFarmComponent } from './little-farm/little-farm.component';

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
