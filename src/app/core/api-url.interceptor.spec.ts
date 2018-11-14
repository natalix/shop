import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApiUrlInterceptor } from 'src/app/core/api-url.interceptor';
import { environment } from 'src/environments/environment';

describe(`ApiUrlInterceptor`, () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiUrlInterceptor,
          multi: true
        }
      ]
    });

    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should add API Url to request', (done: DoneFn) => {
    const apiUrl = environment.apiurl;
    const url = 'characters';
    http.get(url).subscribe();
    done();

    const req = httpMock.expectOne(apiUrl + url);
 
    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toBe(apiUrl + url);

    req.flush({ hello: 'world' });
  });
});
