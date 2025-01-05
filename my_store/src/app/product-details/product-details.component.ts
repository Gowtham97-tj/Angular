import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(x => x.id === productIdFromRoute);
  }

  constructor(private route: ActivatedRoute, private cartService: CartService)
  {

  }

  addToCart(product: Product)
  {
    this.cartService.addToCart(product);
    window.alert('Your Product has been added to the cart');
  }

}
