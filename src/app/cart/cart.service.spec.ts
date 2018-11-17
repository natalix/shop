import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { CartItemModel } from '../model/cart-item.interface';

describe('CartService', () => {
  let service: CartService;

  const mockProducts: CartItemModel[] = [
    {
      id: 1,
      name: 'Aparat',
      price: 320,
      image: 'image',
      thumbnail: 'image'
    },
    {
      id: 2,
      name: 'Książka',
      price: 120,
      image: 'image',
      thumbnail: 'image'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [CartService]
    });
    service = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should sumCart return the total price of cart', () => {

  //   service.sumCart().subscribe(products => {
  //     expect(products).toEqual(0);
  //   });
  // });
});
