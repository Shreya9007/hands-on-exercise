import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'Web Dev', code: 'CS202', credits: 3, gradeStatus: 'passed', enrolled: true }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Step 107: Verify no unexpected HTTP requests were made
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Step 107: Test getCourses() with HttpTestingController
  it('should fetch courses via HTTP GET', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses[0].name).toBe('Data Structures');
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Step 108: Test error handling with 500 status response fallback
  it('should handle HTTP error gracefully and return mock fallback', () => {
    service.getCourses().subscribe(courses => {
      expect(courses).toBeTruthy();
      expect(courses.length).toBeGreaterThan(0);
    });

    // Three attempts due to retry(2)
    const req1 = httpMock.expectOne('http://localhost:3000/courses');
    req1.flush('Server error', { status: 500, statusText: 'Internal Server Error' });

    const req2 = httpMock.expectOne('http://localhost:3000/courses');
    req2.flush('Server error', { status: 500, statusText: 'Internal Server Error' });

    const req3 = httpMock.expectOne('http://localhost:3000/courses');
    req3.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});
