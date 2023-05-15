import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private router: Router, public mainService: MainService) {}

    navigate(route: string): void {
      this.router.navigate(['/', route]);
    }

    logout(): void {
      localStorage.clear();
      this.router.navigate(['/']);
    }

}
