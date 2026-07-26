import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollmentFormComponent } from './enrollment-form.component';
import { FormsModule } from '@angular/forms';

describe('EnrollmentFormComponent', () => {
  let component: EnrollmentFormComponent;
  let fixture: ComponentFixture<EnrollmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentFormComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create enrollment form component', () => {
    expect(component).toBeTruthy();
  });
});
