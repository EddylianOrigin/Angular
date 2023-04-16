import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CoreService} from "../core/core.service";

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss']
})
export class EmployeeAddEditComponent implements OnInit{
  empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ]

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<EmployeeAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private _coreService: CoreService) {
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

  ngOnInit(): void {
        this.empForm.patchValue(this.data);
    }

  onFormSubmit() {
    if(this.empForm.valid) {
      if(this.data) {
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (value:any) => {
            alert('');
            this._coreService.openSnackBar('Employee detail updated!');
            this._dialogRef.close(true);
          },
          error: (err:any) => {
            console.error(err);
          },
        });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (value:any) => {
            alert('');
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err:any) => {
            console.error(err);
          },
        });
      }

    }
  }
}

