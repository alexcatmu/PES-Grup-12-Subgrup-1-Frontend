import { ValidatorFn } from '@angular/forms'
import { FormGroup } from '@angular/forms';

export const PriceRangeValid: ValidatorFn = (control: FormGroup) => {
    const minPrice = control.get('minPrice')?.value;
    const maxPrice = control.get('maxPrice')?.value;
  
    return minPrice !== null && maxPrice !== null && minPrice < maxPrice ? null: { range: true }
  };