import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  form: FormGroup;
  products: Array<{id: string, name: string, imageUrl: string, categoryId: number,
    price: number, description: string, aboutProduct: string}> = [];

  catId: string | undefined;

  constructor(private router: Router,
    private fb: FormBuilder, private mainService: MainService,
    private route: ActivatedRoute) {
      this.form = this.fb.group({
        search: new FormControl(''),
      });

      this.route.queryParams.subscribe( paramMap => {
        if (!paramMap['id']) {
          this.router.navigate(['/', 'store']);
        }
        this.catId = paramMap['id'];
        this.getProduct();
      });
      this.form.controls['search'].valueChanges.subscribe(v => {
        this.getProduct();
      });
    }


  getProduct(): void {
    this.mainService.getProductByCategoryId(this.catId, this.form.controls['search'].value).subscribe(resp => {
      this.products = resp;
    });
  }

  addToCart(p: any): void {
    this.mainService.updateToShoppingCart({
      productId: p.id,
      add: true
    }).subscribe(() => {});
  }
}
