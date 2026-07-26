<div class="courses-page-container">
  <div class="page-header">
    <div>
      <h2>Available Courses</h2>
      <p class="subtitle">Browse, search, and manage your academic course enrollments.</p>
    </div>

    <!-- Search filter input -->
    <div class="search-bar">
      <input
        type="text"
        placeholder="Filter courses..."
        [(ngModel)]="searchTerm"
        (ngModelChange)="onSearchChange()"
      />
    </div>
  </div>

  <!-- Hands-On 8 Step 84: Error message alert -->
  <div *ngIf="errorMessage" class="error-banner">
    ⚠️ {{ errorMessage }}
  </div>

  <!-- Hands-On 3 Step 25: Loading spinner / message -->
  <div *ngIf="isLoading" class="loading-state">
    <div class="spinner"></div>
    <p>Loading courses...</p>
  </div>

  <!-- Hands-On 3 Step 28: ngIf with else template for empty course list -->
  <div *ngIf="!isLoading">
    <div *ngIf="filteredCourses.length > 0; else noCourses" class="courses-grid">
      <!-- Hands-On 3 Step 26: *ngFor with trackBy -->
      <app-course-card
        *ngFor="let c of filteredCourses; let i = index; trackBy: trackByCourseId"
        [course]="c"
        [isEnrolled]="isEnrolled(c.id)"
        (enrollRequested)="onEnroll($event)"
        (click)="onCardClick(c.id)"
      >
      </app-course-card>
    </div>

    <!-- Hands-On 3 Step 28: #noCourses template -->
    <ng-template #noCourses>
      <div class="empty-state">
        <span class="empty-icon">📂</span>
        <p>No courses available.</p>
      </div>
    </ng-template>
  </div>

  <!-- Hands-On 2 Step 24: Display selectedCourseId -->
  <div *ngIf="selectedCourseId" class="selected-id-box">
    <p>Selected course ID: <strong>{{ selectedCourseId }}</strong></p>
  </div>
</div>
