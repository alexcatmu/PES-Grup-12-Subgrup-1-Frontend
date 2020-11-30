import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {ApplyService} from '../services/apply.service';
import {Apply} from '../models/apply';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  applicationForm: FormGroup;
  formSent = false;

  constructor(private fb: FormBuilder, private applyService: ApplyService, private route: Router, private translate: TranslateService) {
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

    this.formSent = true;

    this.applyService.send(application).subscribe(() => { }, error => {
      console.error('Ha habido un error al hacer un apply', error);
    });
  }
}
