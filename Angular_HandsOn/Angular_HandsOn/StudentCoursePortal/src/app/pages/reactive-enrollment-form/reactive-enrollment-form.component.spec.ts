import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveEnrollmentFormComponent', () => {
  let component: ReactiveEnrollmentFormComponent;
  let fixture: ComponentFixture<ReactiveEnrollmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEnrollmentFormComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create reactive enrollment form component', () => {
    expect(component).toBeTruthy();
  });
});
