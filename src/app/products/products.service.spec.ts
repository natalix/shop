import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { CartItemModel } from '../model/cart-item.interface';

describe('ShopService', () => {

  let service: ProductsService;
  let httpMock: HttpTestingController;

  const mockProductsByName: CartItemModel[] = [
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

  const mockProductsByPrice: CartItemModel[] = [
    {
      id: 2,
      name: 'Książka',
      price: 120,
      image: 'image',
      thumbnail: 'image'
    },
    {
      id: 1,
      name: 'Aparat',
      price: 320,
      image: 'image',
      thumbnail: 'image'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.get(ProductsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable with products on getProductData()', (done: DoneFn) => {
    service.getProductData$().subscribe(products => {
      expect(products).toEqual(mockProductsByName);
      done();
    });

    const req = httpMock.expectOne('products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProductsByName);
  });

  it('shoul return sort by name products', (done: DoneFn) => {
    service.getProductSortedByName().subscribe(products => {
      expect(products).toEqual(mockProductsByName);
      done();
    });

    const req = httpMock.expectOne('products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProductsByName);
  });

  it('shoul return sort by price products', (done: DoneFn) => {
    service.getProductSortedByPrice().subscribe(products => {
      expect(products).toEqual(mockProductsByPrice);
      done();
    });

    const req = httpMock.expectOne('products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProductsByName);
  });
});
