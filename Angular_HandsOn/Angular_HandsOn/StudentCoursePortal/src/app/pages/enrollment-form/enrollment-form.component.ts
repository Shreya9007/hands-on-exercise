import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EnrollmentRequest } from '../../models/course.model';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  model: EnrollmentRequest = {
    studentName: '',
    studentEmail: '',
    courseId: 101,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  submitted: boolean = false;

  // Hands-On 4 Step 40: Form submit handler logging form.value and form.valid
  onSubmit(form: NgForm): void {
    console.log('Template-Driven Form submitted!');
    console.log('Form valid:', form.valid);
    console.log('Form value:', form.value);

    if (form.valid) {
      this.submitted = true;
    }
  }

  // Hands-On 4 Step 47: Reset form
  resetForm(form: NgForm): void {
    form.resetForm({
      studentName: '',
      studentEmail: '',
      courseId: 101,
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.submitted = false;
  }
}
