import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ItemComponent } from './item/item.component';
import { CartService } from './cart.service';
import { CartItemModel } from '../model/cart-item.interface';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  const mockProduct: CartItemModel = {
    id: 1,
    name: 'Aparat',
    price: 320,
    image: 'image',
    thumbnail: 'image'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        ItemComponent
      ],
      providers: [
        CartService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    cartService = TestBed.get(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle and show cart', () => {
    const spy = spyOn(component, 'show');

    component.buttonName = 'rozwiń';

    component.toggle();

    expect(spy).toHaveBeenCalled();
  });

  it('should toggle and hide cart', () => {
    const spy = spyOn(component, 'hide');

    component.buttonName = 'ukryj';

    component.toggle();

    expect(spy).toHaveBeenCalled();
  });

  it('should hide cart', () => {
    component.buttonName = 'ukryj';

    component.hide();

    expect(component.buttonName).toEqual('rozwiń');
  });

  it('should show cart', () => {
    component.buttonName = 'rozwiń';

    component.show();

    expect(component.buttonName).toEqual('ukryj');
  });

  it('should increment product amount in the cart', () => {
    spyOn(cartService, 'dispatch');

    component.increment(mockProduct);

    expect(cartService.dispatch).toHaveBeenCalledWith({ type: 'ADD_PRODUCT', payload: mockProduct });
  });

  it('should decrement product amount in the cart', () => {
    spyOn(cartService, 'dispatch');

    component.decrement(mockProduct);

    expect(cartService.dispatch).toHaveBeenCalledWith({ type: 'REMOVE_PRODUCT', payload: mockProduct.id });
  });
});
