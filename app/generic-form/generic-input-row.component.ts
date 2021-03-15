import { Component, Input } from '@angular/core';

@Component({
  selector: 'generic-input-row',
  templateUrl: './generic-input-row.component.html'
})
export class GenericInputRow {
  @Input('field') field;
  @Input('formGroup') formGroup;
}