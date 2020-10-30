import { FormControl, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from "@angular/material/core";

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
        return control.dirty && form.hasError('range');
    }
}