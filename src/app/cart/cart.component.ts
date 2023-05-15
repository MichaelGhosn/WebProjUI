import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    data: {id: string, totalPrice: number, productShoppingCarts: Array<{productId: string, quantity: 1, totalPrice: number}>} | null = null;
    

    products: Array<{id: string, categoryId: string, price: number, descrption: string, name: string, aboutProduct: string,
    imageUrl: string}> = []


    constructor(private mainService: MainService, private router: Router) {}

    ngOnInit(): void {
       this.mainService.getShoppingCart().subscribe(resp => {
        this.data = resp;
        console.log(resp.productShoppingCarts);
        resp.productShoppingCarts.forEach((prod : any) => {
          this.mainService.getProductById(prod.productId).subscribe(pInfo => {
            this.products.push(pInfo);
          });
        })
       });
    }

    confirm(): void {
      this.products.forEach(p => {
          this.mainService.updateToShoppingCart({
            productId: p.id,
            add: false
          }).subscribe(() => {});
      });
      this.router.navigate(['']);
    }
}
