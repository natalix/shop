import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { CartItemModel } from 'src/app/model/cart-item.interface';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const mockProduct: CartItemModel = {
    id: 1,
    name: 'Aparat',
    price: 320,
    image: 'image',
    thumbnail: 'image'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    component.product = mockProduct;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit productChosen', () => {
    const spy = spyOn(component.productChosen, 'emit');

    component.addToCart(mockProduct);

    expect(spy).toHaveBeenCalledWith(mockProduct);
  });
});
