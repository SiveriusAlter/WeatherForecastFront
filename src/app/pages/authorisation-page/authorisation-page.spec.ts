import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisationPage } from './authorisation-page';

describe('AuthorisationPage', () => {
  let component: AuthorisationPage;
  let fixture: ComponentFixture<AuthorisationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorisationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
