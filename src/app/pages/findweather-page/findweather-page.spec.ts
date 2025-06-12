import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindweatherPage } from './findweather-page';

describe('FindweatherPage', () => {
  let component: FindweatherPage;
  let fixture: ComponentFixture<FindweatherPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindweatherPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindweatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
