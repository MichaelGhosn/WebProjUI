import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    {path: '/assets/home-generation-1.svg'},
    {path: '/assets/home-generation-2.svg'},
    {path: '/assets/home-generation-3.svg'},
    {path: '/assets/home-generation-4.svg'}
]
}
