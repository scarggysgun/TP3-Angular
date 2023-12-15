import { Injectable } from '@angular/core';
import { MarketPlaceItemType } from '../types/marketplace.type';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: MarketPlaceItemType[] = [
    {
      id: 1,
      title: 'ADIDAS MAX',
      category: 'ADULT',
      image: 'https://placehold.co/400',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      price: 65.0,
      isSelected: false,
    },
    {
      id: 2,
      title: 'LEBRON MAX AIR',
      category: 'KIDS',
      image: 'https://placehold.co/400',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      price: 65.0,
      isSelected: false,
    },
    {
      id: 3,
      title: 'PUMA XS',
      category: 'ADULT',
      image: 'https://placehold.co/400',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      price: 4.99,
      isSelected: false,
    },
  ];

  constructor() {}

  getProdcuts = (): Observable<Array<MarketPlaceItemType>> => {
    return of(this._products);
  };

  markProductAsSelected = (item: MarketPlaceItemType) => {
    item.isSelected = true;
  };

  markProductAsUnselected = (item: MarketPlaceItemType) => {
    item.isSelected = false;
  };
}
