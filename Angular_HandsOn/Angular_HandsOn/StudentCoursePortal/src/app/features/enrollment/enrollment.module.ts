import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentFormComponent } from '../../pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from '../../pages/reactive-enrollment-form/reactive-enrollment-form.component';

/**
 * Hands-On 7 Task 2 Step 73: Lazy Loaded Feature Module
 * Lazy loading splits the application into separate JavaScript chunks loaded on demand when the user visits /enroll.
 */
@NgModule({
  imports: [
    CommonModule,
    EnrollmentRoutingModule,
    EnrollmentFormComponent,
    ReactiveEnrollmentFormComponent
  ]
})
export class EnrollmentModule {}
