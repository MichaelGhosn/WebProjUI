import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  isRegister: boolean = false;
  form: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder, private mainService: MainService) {
      this.form = this.fb.group({
        name: new FormControl(''),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      });
    }

  ngOnInit(): void {
     this.isRegister = this.router.url == '/register';
  }

  register(): void {
    if (!this.form.valid) {
      return;
    }
    this.mainService.signUp(this.form.value).subscribe(resp => {
      localStorage.setItem('token', resp.jwt);
      this.navigate('');
    });
  }

  login(): void {
    if (!this.form.valid) {
      return;
    }
    this.mainService.login(this.form.value).subscribe(resp => {
      localStorage.setItem('token', resp.jwt);
      this.navigate('');
    });
  }

  navigate(route: string): void {
    this.router.navigate(['/', route]);
  }

}
