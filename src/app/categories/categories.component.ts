import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  form: FormGroup;
  categories: Array<{id: string, name: string, imageUrl: string}> = [];

  constructor(private router: Router,
    private fb: FormBuilder, private mainService: MainService) {
      this.form = this.fb.group({
        search: new FormControl(''),
      });
      this.getCategories();
      this.form.controls['search'].valueChanges.subscribe(v => {
        this.getCategories();
      });
  }
  
  getCategories(): void {
      this.mainService.getCagegories(this.form.controls['search'].value).subscribe(resp => {
        this.categories = resp;
      });
  }

  navigate(route: string, id: any): void {
    console.log(route);
    this.router.navigate(['/', route], {
      queryParams: {
        id: id
      }
    });
  }

}
