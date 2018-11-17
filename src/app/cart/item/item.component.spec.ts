import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { CartItemModel } from 'src/app/model/cart-item.interface';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  const mockProduct: CartItemModel = {
    id: 1,
    name: 'Aparat',
    price: 320,
    image: 'image',
    thumbnail: 'image'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    component.product = mockProduct;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit increment', () => {
    const spy = spyOn(component.increment, 'emit');

    component.incrementClick();

    expect(spy).toHaveBeenCalledWith(mockProduct);
  });

  it('should emit decrement', () => {
    const spy = spyOn(component.decrement, 'emit');

    component.decrementClick();

    expect(spy).toHaveBeenCalledWith(mockProduct);
  });
});
