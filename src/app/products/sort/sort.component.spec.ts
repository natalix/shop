import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sortByName', () => {
    const spy = spyOn(component.sortByName, 'emit');

    component.sortByNameClick();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit sortByPrice', () => {
    const spy = spyOn(component.sortByPrice, 'emit');

    component.sortByPriceClick();

    expect(spy).toHaveBeenCalled();
  });
});
