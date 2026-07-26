import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from '../../components/notification/notification.component';

/**
 * Hands-On 2 Step 15: Difference between [property] binding and [(ngModel)] two-way binding:
 * - [property] binding is ONE-WAY from Component -> DOM element property. State changes in the component update the DOM,
 *   but DOM user input does NOT update the component property automatically.
 * - [(ngModel)] is TWO-WAY binding (DOM <-> Component). It combines property binding [ngModel] and event binding (ngModelChange),
 *   syncing user DOM input immediately with the component state and vice versa.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseSummaryWidgetComponent, NotificationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Hands-On 2 Step 11: String interpolation property
  portalName: string = 'Student Course Portal';

  // Hands-On 2 Step 12: Property binding property
  isPortalActive: boolean = true;

  // Hands-On 2 Step 13: Event binding message
  message: string = '';

  // Hands-On 2 Step 14: Two-way binding property with ngModel
  searchTerm: string = '';

  // Stats row properties
  availableCoursesCount: number = 12; // Dynamic from service
  enrolledCount: number = 3;
  gpa: number = 3.8;

  constructor(private courseService: CourseService, private router: Router) {}

  // Hands-On 2 Step 16: ngOnInit lifecycle hook
  ngOnInit(): void {
    const courses = this.courseService.getCoursesSync();
    this.availableCoursesCount = courses.length > 0 ? courses.length : 12;
    console.log('HomeComponent initialised — courses loaded');
  }

  // Hands-On 2 Step 17: ngOnDestroy lifecycle hook
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Hands-On 2 Step 13: Event handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
    this.router.navigate(['/enroll-reactive']);
  }
}
