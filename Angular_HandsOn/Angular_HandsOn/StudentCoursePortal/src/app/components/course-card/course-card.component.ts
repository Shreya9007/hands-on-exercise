import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course: Course = {
    id: 0,
    name: 'Sample Course',
    code: 'CS000',
    credits: 3,
    gradeStatus: 'pending',
    enrolled: false
  };

  @Input() isEnrolled: boolean = false;
  @Input() customHighlightColor: string = 'rgba(56, 189, 248, 0.12)';

  @Output() enrollRequested = new EventEmitter<number>();
  @Output() toggleEnroll = new EventEmitter<number>();

  isExpanded: boolean = false;

  // Hands-On 2 Step 18: ngOnChanges hook logging previous and current input value
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCardComponent ngOnChanges - Previous:', changes['course'].previousValue);
      console.log('CourseCardComponent ngOnChanges - Current:', changes['course'].currentValue);
    }
  }

  onEnrollClick(event: Event): void {
    event.stopPropagation();
    this.enrollRequested.emit(this.course.id);
    this.toggleEnroll.emit(this.course.id);
  }

  toggleDetails(event: Event): void {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  // Hands-On 3 Step 32: Refactored ngClass binding to getter in component class.
  // Getters keep HTML templates clean, concise, and easier to maintain by moving dynamic styling logic into TypeScript.
  get cardClasses(): { [key: string]: boolean } {
    return {
      'course-card': true,
      'card--enrolled': this.isEnrolled || !!this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }
}
