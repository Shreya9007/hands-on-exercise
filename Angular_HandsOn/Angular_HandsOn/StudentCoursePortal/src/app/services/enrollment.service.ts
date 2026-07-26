import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

/**
 * Hands-On 6 Task 2: EnrollmentService & Service-to-Service Injection
 * Demonstrates injecting CourseService into EnrollmentService to resolve course IDs to full Course objects.
 */
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [1, 2]; // Initial enrolled course IDs (e.g. CS101, CS202)

  // Step 64: Inject CourseService into EnrollmentService — service-to-service dependency injection
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  getEnrolledCourses(): Course[] {
    const allCourses = this.courseService.getCoursesSync();
    return allCourses.filter(c => this.enrolledCourseIds.includes(c.id));
  }
}
