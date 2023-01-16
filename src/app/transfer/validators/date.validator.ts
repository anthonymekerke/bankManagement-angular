import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function greaterThanCurrentDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const executionDate: Date = control.value;
    const currentDate: Date = new Date();

    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    return executionDate < currentDate ? {greaterThanCurrentDate: true} : null;
  };
}
