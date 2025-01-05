import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[] = []

  constructor(private http: HttpClient, private cartService: CartService, private formBuilder: FormBuilder)
  {
    this.items = this.cartService.getItems();
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  getShippingPrices()
  {
    return this.http.get<{ type: string, price: number }>('/assets/shipping.json')
  }

  onSubmit(): void
  {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
