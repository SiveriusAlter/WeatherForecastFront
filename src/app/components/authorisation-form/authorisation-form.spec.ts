import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisationForm } from './authorisation-form';

describe('AuthorisationForm', () => {
  let component: AuthorisationForm;
  let fixture: ComponentFixture<AuthorisationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorisationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorisationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
