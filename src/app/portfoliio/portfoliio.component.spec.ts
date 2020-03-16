import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliioComponent } from './portfoliio.component';

describe('PortfoliioComponent', () => {
  let component: PortfoliioComponent;
  let fixture: ComponentFixture<PortfoliioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
