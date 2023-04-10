import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss']
})
export class EmployeeAddEditComponent {
  empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ]

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: DialogRef<EmployeeAddEditComponent>) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
  }

  onFormSubmit() {
    if(this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (value:any) => {
        alert('Employee added successfully');
        this._dialogRef.close();
        },
      error: (err:any) => {
          console.error(err);
      }
      })
    }
  }
}
