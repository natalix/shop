import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsComponent } from './products.component';
import { SortComponent } from './sort/sort.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { CartService } from '../cart/cart.service';
import { CartItemModel } from '../model/cart-item.interface';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductsService;
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
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        ProductsComponent,
        SortComponent,
        ProductComponent
       ],
      providers: [
         ProductsService,
         CartService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    productService = TestBed.get(ProductsService);
    cartService = TestBed.get(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sort by name method from product service', () => {
    spyOn(productService, 'getProductSortedByName');

    component.sortByName();

    expect(productService.getProductSortedByName).toHaveBeenCalled();
  });

  it('should call sort by price method from product service', () => {
    spyOn(productService, 'getProductSortedByPrice');

    component.sortByPrice();

    expect(productService.getProductSortedByPrice).toHaveBeenCalled();
  });

  it('should call add to cart cart service method', () => {
    spyOn(cartService, 'dispatch');

    component.addToCart(mockProduct);

    expect(cartService.dispatch).toHaveBeenCalledWith({ type: 'ADD_PRODUCT', payload: mockProduct });
  });
});
