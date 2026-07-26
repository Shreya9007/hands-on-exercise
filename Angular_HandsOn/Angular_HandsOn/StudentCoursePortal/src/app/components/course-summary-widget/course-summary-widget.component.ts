import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.component.html',
  styleUrls: ['./course-summary-widget.component.css']
})
export class CourseSummaryWidgetComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCoursesSync();
  }

  get totalCredits(): number {
    return this.courses.reduce((acc, c) => acc + c.credits, 0);
  }
}
