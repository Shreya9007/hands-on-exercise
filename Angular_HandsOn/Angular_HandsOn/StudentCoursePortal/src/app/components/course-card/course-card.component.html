<div
  [ngClass]="cardClasses"
  [ngStyle]="{
    'border-left': '6px solid ' + (
      course.gradeStatus === 'passed' ? '#22c55e' :
      course.gradeStatus === 'failed' ? '#ef4444' : '#94a3b8'
    )
  }"
  [appHighlight]="customHighlightColor"
>
  <div class="card-header">
    <span class="course-code">{{ course.code }}</span>
    
    <!-- Hands-On 3 Task 1 Step 27: *ngSwitch badge per gradeStatus -->
    <div [ngSwitch]="course.gradeStatus" class="status-container">
      <span *ngSwitchCase="'passed'" class="badge badge-passed">Passed</span>
      <span *ngSwitchCase="'failed'" class="badge badge-failed">Failed</span>
      <span *ngSwitchDefault class="badge badge-pending">Pending</span>
    </div>
  </div>

  <h3 class="course-name">{{ course.name }}</h3>

  <div class="card-meta">
    <!-- Hands-On 3 Task 3 Step 36: Custom pipe creditLabel -->
    <span class="credits-pill">{{ course.credits | creditLabel }}</span>
    <span class="enrollment-status" *ngIf="isEnrolled || course.enrolled">✓ Enrolled</span>
  </div>

  <div class="card-actions">
    <button class="btn btn-enroll" (click)="onEnrollClick($event)">
      {{ (isEnrolled || course.enrolled) ? 'Unenroll' : 'Enroll' }}
    </button>
    <button class="btn btn-details" (click)="toggleDetails($event)">
      {{ isExpanded ? 'Hide Details' : 'Show Details' }}
    </button>
  </div>

  <div *ngIf="isExpanded" class="expanded-details">
    <p><strong>Course Code:</strong> {{ course.code }}</p>
    <p><strong>Total Credits:</strong> {{ course.credits }}</p>
    <p><strong>Grade Status:</strong> {{ course.gradeStatus | uppercase }}</p>
    <p class="description">Includes comprehensive hands-on labs, code reviews, and practical assignments.</p>
  </div>
</div>
