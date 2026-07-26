import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import * as CourseActions from '../../store/course/course.actions';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // Hands-On 3 Step 25: Loading indicator state
  isLoading: boolean = true;
  errorMessage: string = '';

  // Hands-On 2 Step 22 & Hands-On 6 Step 60: Array of courses
  courses: Course[] = [];

  // Hands-On 9 Step 96: NgRx Store Selectors with async pipe
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  enrolledIds$: Observable<number[]>;

  // Hands-On 2 Step 23: Parent-child selected course property
  selectedCourseId: number | null = null;
  searchTerm: string = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    // NgRx Store Selectors
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnInit(): void {
    // Hands-On 7 Step 71: Read query parameter from route snapshot
    const searchParam = this.route.snapshot.queryParamMap.get('search');
    if (searchParam) {
      this.searchTerm = searchParam;
    }

    // Hands-On 9 Step 96: Dispatch NgRx loadCourses action
    this.store.dispatch(CourseActions.loadCourses());

    // Hands-On 8 Step 80: Subscribe to HttpClient API response
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => {
        this.errorMessage = err.message || 'Failed to load courses';
        this.isLoading = false;
      },
      complete: () => {
        // Hands-On 3 Step 25: 1.5 seconds simulated loading delay
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);
      }
    });
  }

  // Hands-On 3 Step 26: trackBy function for ngFor performance optimization.
  // trackBy tells Angular how to identify items in the array (by unique id).
  // Without it, Angular re-renders every DOM element in the list on any array change.
  // With trackBy, only added, removed, or modified items are re-rendered.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  // Hands-On 2 Step 23: Event handler for @Output enrollRequested
  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
      this.store.dispatch(EnrollmentActions.unenrollFromCourse({ courseId }));
    } else {
      this.enrollmentService.enroll(courseId);
      this.store.dispatch(EnrollmentActions.enrollInCourse({ courseId }));
    }
  }

  // Hands-On 7 Step 70 & 71: Route parameter navigation & query params update
  onCardClick(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  onSearchChange(): void {
    this.router.navigate(['courses'], {
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge'
    });
  }

  get filteredCourses(): Course[] {
    if (!this.searchTerm) return this.courses;
    return this.courses.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      c.code.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  isEnrolled(courseId: number): boolean {
    return this.enrollmentService.isEnrolled(courseId);
  }
}
