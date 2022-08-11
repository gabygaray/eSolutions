import { Component, OnInit } from "@angular/core";
import { Course } from "../course";
import { CourseService } from "../course.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private location: Location
  ) {}

  getCourses(): void {
    this.courseService
      .getCoursesInProgress()
      .subscribe((courses) =>
        courses.map((course) =>
          course.developing == true ? this.courses.push(course) : courses
        )
      );
  }

  updateCourse(course: Course) {
    if (course) {
      course.developing = false;
      this.courseService.updateCourse(course).subscribe(() => this.back());
    }
  }

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getCourses();
  }
}
