import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarketPlaceItemType } from '../../types/marketplace.type';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-marketplace-item-list',
  templateUrl: './marketplace-item-list.component.html',
  styleUrl: './marketplace-item-list.component.scss',
})
export class MarketplaceItemListComponent implements OnInit, OnDestroy {
  productsSub!: Subscription;
  marketPlaceItems: MarketPlaceItemType[] = [];

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsSub = this.productService
      .getProdcuts()
      .subscribe((products) => {
        this.marketPlaceItems = products;
      });
  }

  addToCart = (item: MarketPlaceItemType) => {
    this.productService.markProductAsSelected(item);
    this.cartService.addItem(item);
  };

  removeFromCart = (item: MarketPlaceItemType) => {
    this.productService.markProductAsUnselected(item);
    this.cartService.removeItem(item);
  };

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }
}
