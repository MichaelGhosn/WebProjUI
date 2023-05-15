import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-little-farm',
  templateUrl: './little-farm.component.html',
  styleUrls: ['./little-farm.component.scss']
})
export class LittleFarmComponent {

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate(['/', route]);
  }

}
