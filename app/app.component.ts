import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericFormComponent, GenericFormType } from './generic-form/generic-form.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @ViewChild('genericForm') genericForm: GenericFormComponent;

  fields: Array<GenericFormType> = [
    { type: 'control', name: 'firstName', label: 'Vorname', inputType: 'text', placeHolder: 'Vorname' }, 
    {
      type: 'control', name: 'gender', label: 'Geschlecht', inputType: 'dropdown',
      lookups: [{ value: '', label: 'Bitte auswählen', selected: true }, { value: '0', label: 'männlich' }, { value: '1', label: 'weiblich' }],
      constraints: [{ targetFieldName: 'salutation', executeValues: [{ srcValue: '0', targetValue: '0' }, { srcValue: '1', targetValue: '1' }] }]
    },
    { type: 'control', name: 'age', label: 'Alter', inputType: 'number' },
    { type: 'control', name: 'agbAccepted', label: 'AGB gelesen?', inputType: 'checkbox' },
    {
      type: 'control', name: 'salutation', label: 'Anrede', inputType: 'dropdown',
      lookups: [{ value: '', label: 'Bitte auswählen' }, { value: '0', label: 'Herr' }, { value: '1', label: 'Frau' }]
    },

    {
      type: 'group', name: 'groupName', groupTitle: 'Form Group Beispiel',
      controls: [
        { name: 'firstGroupControl', label: 'Form Group Control', inputType: 'text' }
      ]
    },

    {
      type: 'array', name: 'arrayName', arrayTitle: 'Form Array Beispiel',
      groups: [
        {
          name: 'firstArrayGroup', groupTitle: 'Form Group in Form Array',
          controls: [
            { name: 'firstArrayControl', label: 'First Array Control', inputType: 'text' }
          ]
        }
      ]
    }
  ];

  ngOnInit() { }
}