import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular15-app';

  schools = [
    {
      id: 1,
      name: 'Test School',
      location: 'ABCD',
      phone: 3212344,
      status: 'open',
      students: [
        { id: 1, name: 'Ronaldo', age: 8, grade: 1, division: 'A' },
        { id: 2, name: 'Messi', age: 9, grade: 2, division: 'B' }
      ]
    },
    {
      id: 2,
      name: 'Elite Academy',
      location: 'XYZ',
      phone: 9876543,
      status: 'closed',
      students: [
        { id: 3, name: 'Neymar', age: 10, grade: 3, division: 'A' }
      ]
    }
  ];

  selectedSchool!: any;
  selectedStudent: any = {};
  mode: 'add' | 'edit' = 'add';
  displayDialog = false;

  openStudentForm(school: any, student: any = {}) {
    this.selectedSchool = school;
    this.selectedStudent = { ...student };
    this.mode = student.id ? 'edit' : 'add';
    this.displayDialog = true;
  }

  updateStudent(student: any) {
    if (this.mode === 'add') {
      this.selectedSchool.students.push({ ...student, id: Date.now() });
    }
    this.displayDialog = false;
  }

}
