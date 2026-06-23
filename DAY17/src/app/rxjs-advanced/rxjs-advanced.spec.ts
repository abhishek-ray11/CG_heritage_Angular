import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAdvanced } from './rxjs-advanced';

describe('RxjsAdvanced', () => {
  let component: RxjsAdvanced;
  let fixture: ComponentFixture<RxjsAdvanced>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsAdvanced],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsAdvanced);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
