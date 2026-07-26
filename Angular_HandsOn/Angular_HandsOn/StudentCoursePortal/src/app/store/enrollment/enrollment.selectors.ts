import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';
import { Course } from '../../models/course.model';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(
  selectEnrollmentState,
  (state: EnrollmentState) => state ? state.enrolledCourseIds : []
);

/**
 * Hands-On 9 Step 99: Cross-slice selector combining Course state & Enrollment state.
 * Uses createSelector with multiple input selectors to derive joined data without duplicating state.
 */
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses: Course[], enrolledIds: number[]) => {
    return courses.filter(c => enrolledIds.includes(c.id));
  }
);
