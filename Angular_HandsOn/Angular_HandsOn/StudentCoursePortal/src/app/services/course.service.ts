import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';
  private studentsUrl = 'http://localhost:3000/students';

  // Fallback in-memory mock courses array for offline/testing mode
  private mockCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'Web Development with Angular', code: 'CS202', credits: 3, gradeStatus: 'passed', enrolled: true },
    { id: 3, name: 'Database Management Systems', code: 'CS303', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 4, name: 'Operating Systems & Linux', code: 'CS404', credits: 3, gradeStatus: 'pending', enrolled: false },
    { id: 5, name: 'Software Engineering Principles', code: 'CS505', credits: 2, gradeStatus: 'failed', enrolled: false }
  ];

  constructor(private http: HttpClient) {}

  // Hands-On 6 & Hands-On 8: Synchronous & Observable Course retrieval
  getCoursesSync(): Course[] {
    return [...this.mockCourses];
  }

  // Hands-On 8 Task 1 & 2: HttpClient GET with map, tap, retry(2), catchError
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Hands-On 8 Step 86: Retry failed HTTP requests up to 2 times before propagating error
      retry(2),
      // Hands-On 8 Step 83: Chain map operator to filter courses with credits > 0
      map((courses: Course[]) => courses.filter(c => c.credits > 0)),
      // Hands-On 8 Step 85: tap is for side-effects (logging/analytics) that should NOT alter the stream values.
      // tap is preferred over map for side effects because map is intended for pure data transformations.
      tap((courses: Course[]) => console.log('Courses loaded:', courses.length)),
      // Hands-On 8 Step 84: catchError handles network failures gracefully and emits user-friendly error
      catchError(err => {
        console.error('HTTP Error in CourseService.getCourses:', err);
        // Fallback to local mock data if JSON server is unavailable
        return of(this.mockCourses);
      })
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError(() => {
        const found = this.mockCourses.find(c => c.id === id);
        return of(found);
      })
    );
  }

  // Hands-On 8 Task 1: POST, PUT, DELETE
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    const newCourse: Course = { ...course, id: Date.now() };
    return this.http.post<Course>(this.apiUrl, newCourse).pipe(
      tap(() => this.mockCourses.push(newCourse)),
      catchError(() => {
        this.mockCourses.push(newCourse);
        return of(newCourse);
      })
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
      catchError(() => {
        const index = this.mockCourses.findIndex(c => c.id === course.id);
        if (index !== -1) this.mockCourses[index] = course;
        return of(course);
      })
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.mockCourses = this.mockCourses.filter(c => c.id !== id);
      }),
      catchError(() => {
        this.mockCourses = this.mockCourses.filter(c => c.id !== id);
        return of(undefined as void);
      })
    );
  }

  addCourse(course: Course): void {
    this.mockCourses.push(course);
  }

  // Hands-On 8 Step 87: switchMap demonstration chaining course lookup to student lookup.
  // switchMap cancels the previous inner Observable subscription if a new courseId is selected before completion,
  // preventing out-of-order response bugs in type-ahead search or rapid navigation.
  getEnrolledStudentsForCourse(courseId: number): Observable<Student[]> {
    return of(courseId).pipe(
      switchMap(id =>
        this.http.get<Student[]>(`${this.studentsUrl}?enrolledCourseIds_like=${id}`).pipe(
          catchError(() => of([] as Student[]))
        )
      )
    );
  }
}
