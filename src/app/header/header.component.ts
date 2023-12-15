import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MarketPlaceItemType } from '../types/marketplace.type';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input()
  title: string | undefined;

  cartItems: { item: MarketPlaceItemType; quantity: number }[] = [];
  cartItemsSub!: Subscription;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemsSub = this.cartService
      .getCartItems()
      .subscribe((cartItems) => {
        this.cartItems = cartItems;
      });
  }

  ngOnDestroy(): void {
    this.cartItemsSub.unsubscribe();
  }
}
