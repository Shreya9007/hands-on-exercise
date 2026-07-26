import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { HasDirtyForm } from '../../guards/unsaved-changes.guard';

// Hands-On 5 Step 53: Custom Synchronous Validator
// Checks if control value starts with disallowed prefix 'XX'
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  if (control.value && typeof control.value === 'string' && control.value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit, HasDirtyForm {
  enrollForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  // Hands-On 5 Step 49: Build reactive form with FormBuilder
  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Hands-On 5 Step 55: Async validator simulateEmailCheck as 3rd argument
      studentEmail: ['', [Validators.required, Validators.email], [this.simulateEmailCheck.bind(this)]],
      // Hands-On 5 Step 53: Applied custom validator noCourseCode
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      // Validators.requiredTrue ensures checkbox is explicitly checked
      agreeToTerms: [false, Validators.requiredTrue],
      // Hands-On 5 Step 56: FormArray for dynamic additional course controls
      additionalCourses: this.fb.array([])
    });
  }

  // Hands-On 5 Step 57: Typed getter for FormArray.
  // Using a typed getter in TypeScript avoids cumbersome type casting like
  // `(enrollForm.get('additionalCourses') as FormArray)` directly inside HTML templates.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Hands-On 5 Step 56: Add control to FormArray
  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Hands-On 5 Step 56: Remove control from FormArray
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Hands-On 5 Step 55: Custom Async Validator returning Promise
  // Resolves after 800ms to simulate asynchronous API database check
  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }

  // Hands-On 5 Step 51 & 52: Form submission & difference explanation
  // Note: enrollForm.value EXCLUDES disabled form controls.
  // enrollForm.getRawValue() INCLUDES all form controls regardless of disabled state.
  onSubmit(): void {
    console.log('Reactive Form Value (value):', this.enrollForm.value);
    console.log('Reactive Form Raw Value (getRawValue):', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }

  // Hands-On 7 Step 77: Guard dirty check
  isFormDirty(): boolean {
    return this.enrollForm ? this.enrollForm.dirty && !this.submitted : false;
  }
}
