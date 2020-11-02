import {Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  applicationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private dialog: MatDialog, private router: Router) {
    this.applicationForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      company: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      tlf: new FormControl(null),
      description: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.applicationForm.controls[controlName].hasError(errorName);
  }

  onSubmit(value: any): void {
    const application = {
      name: value.name,
      company: value.company,
      email: value.email,
      description: value.description
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([`/`]).then(() => console.log('redirect to home'));
    });
  }
}
