import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  studentName = 'Alex Johnson';
  studentEmail = 'alex.johnson@student.edu';
  gpa = 3.8;

  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  // Hands-On 6 Step 66: Inject EnrollmentService and display list of enrolled courses
  ngOnInit(): void {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }

  unenroll(courseId: number): void {
    this.enrollmentService.unenroll(courseId);
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
