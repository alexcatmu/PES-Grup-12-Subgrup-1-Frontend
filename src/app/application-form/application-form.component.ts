import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog.component';
import {ApplyService} from '../services/apply.service';
import {Apply} from '../models/apply';

@Component({
  selector: 'app-signup',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  applicationForm: FormGroup;

  constructor(private fb: FormBuilder, private applyService: ApplyService, private dialog: MatDialog, private route: Router) {
    this.applicationForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      company: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
      description: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.applicationForm.controls[controlName].hasError(errorName);
  }

  onSubmit(value: any): void {
    const application: Apply = {
      name: value.name,
      company: value.company,
      email: value.email,
      phone: value.phone,
      text: value.description
    };

    this.applyService.send(application).subscribe(() => { }, error => {
      console.error('Ha habido un error al hacer un apply', error);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.route.navigate([`/`]).then(() => console.log('redirect to home'));
    });
  }
}
