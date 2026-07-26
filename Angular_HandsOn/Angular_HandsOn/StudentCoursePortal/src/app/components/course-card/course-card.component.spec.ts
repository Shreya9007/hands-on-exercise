import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed',
    enrolled: false
  };

  // Step 101: Configure TestBed
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Step 102: Component creation test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: @Input rendering test
  it('should render course name from @Input course property', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const titleDe = fixture.debugElement.query(By.css('.course-name'));
    expect(titleDe.nativeElement.textContent).toContain('Data Structures');
  });

  // Step 104: @Output event emission test
  it('should emit course id on enroll button click', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');
    const enrollBtn = fixture.debugElement.query(By.css('.btn-enroll'));
    enrollBtn.nativeElement.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Step 105: ngOnChanges hook test with console log spy
  it('should log previous and current values in ngOnChanges', () => {
    spyOn(console, 'log');

    const changes: SimpleChanges = {
      course: new SimpleChange(null, mockCourse, true)
    };

    component.ngOnChanges(changes);
    expect(console.log).toHaveBeenCalledWith('CourseCardComponent ngOnChanges - Previous:', null);
    expect(console.log).toHaveBeenCalledWith('CourseCardComponent ngOnChanges - Current:', mockCourse);
  });
});
