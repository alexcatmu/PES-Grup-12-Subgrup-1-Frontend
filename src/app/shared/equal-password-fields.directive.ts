import { ValidatorFn } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export const EqualPasswordFields: ValidatorFn = (control: FormGroup) => {
  const pwd1 = control.get('password')?.value;
  const pwd2 = control.get('passwordConfirmation')?.value;

  return pwd1 === pwd2 ? null : { equal: true };
};
