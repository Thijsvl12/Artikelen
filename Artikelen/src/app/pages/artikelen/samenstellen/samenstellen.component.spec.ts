import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamenstellenComponent } from './samenstellen.component';

describe('SamenstellenComponent', () => {
  let component: SamenstellenComponent;
  let fixture: ComponentFixture<SamenstellenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamenstellenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamenstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
