import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  @Input() student: any = {};  // Receives student data
  @Input() mode: 'edit' | 'add' | null = null; // Mode to determine action
  @Output() studentChange = new EventEmitter<any>();  // Sends updated student data
  @Output() closeDialog = new EventEmitter<void>();  // Closes the dialog
  @Input() visible: boolean = false;
 
  saveStudent() {
    if (this.student.name && this.student.grade) {
      this.studentChange.emit(this.student);
      this.closeDialog.emit();
    }
  }
}
