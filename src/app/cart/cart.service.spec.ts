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

  it('should dispatch action ADD_PRODUCT and one item to cart', () => {
    const action = { type: 'ADD_PRODUCT', payload: mockProducts[0]};

    service.dispatch(action);
    service.cart$.subscribe(cart => {
      expect(cart[0].id).toEqual(mockProducts[0].id);
    });
  });

  it('should dispatch action ADD_PRODUCT and add two items to cart', () => {
    const action = { type: 'ADD_PRODUCT', payload: mockProducts[0]};
    const action2 = { type: 'ADD_PRODUCT', payload: mockProducts[1]};

    service.dispatch(action);
    service.dispatch(action2);

    service.cart$.subscribe(cartState => {
      expect(cartState.length).toEqual(2);
      expect(cartState[1].id).toEqual(mockProducts[1].id);
    });
  });

  it('should increase item quantity in the cart', () => {
    const action = { type: 'ADD_PRODUCT', payload: mockProducts[0]};

    service.dispatch(action);
    service.dispatch(action);

    service.cart$.subscribe(cartState => {
      expect(cartState[0].quantity).toEqual(2);
    });
  });

  it('should decrease item quantity in the cart', () => {
    const actionAdd = { type: 'ADD_PRODUCT', payload: mockProducts[0]};
    const actionRemove = { type: 'REMOVE_PRODUCT', payload: 1};

    service.dispatch(actionAdd);
    service.dispatch(actionAdd);

    service.dispatch(actionRemove);

    service.cart$.subscribe(cartState => {
      expect(cartState[0].quantity).toEqual(1);
    });
  });

  it('should remove item from the cart', () => {
    const actionAdd = { type: 'ADD_PRODUCT', payload: mockProducts[0]};
    const actionRemove = { type: 'REMOVE_PRODUCT', payload: 1};

    service.dispatch(actionAdd);

    service.dispatch(actionRemove);

    service.cart$.subscribe(cartState => {
      expect(cartState.length).toEqual(0);
    });
  });

  it('should sum the cart', () => {
    const actionAdd = { type: 'ADD_PRODUCT', payload: mockProducts[0]};

    service.dispatch(actionAdd);
    service.dispatch(actionAdd);

    service.sumCart().subscribe(cartSum => {
      expect(cartSum).toEqual(640);
    });
  });

  it('should return sum of empty cart',  () => {
    service.sumCart().subscribe(cartSum => {
      expect(cartSum).toEqual(0);
    });
  });
});
