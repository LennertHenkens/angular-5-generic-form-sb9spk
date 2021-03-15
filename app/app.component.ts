import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import {
  GenericFormComponent,
  GenericFormType
} from "./generic-form/generic-form.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  @ViewChild("genericForm") genericForm: GenericFormComponent;

  fields: Array<GenericFormType> = [
    {
      type: "control",
      name: "firstName",
      label: "voornaam",
      inputType: "text"
    },
    {
      type: "control",
      name: "gender",
      label: "geslacht",
      inputType: "dropdown",
      lookups: [
        { value: "", label: "leeglaten", selected: true },
        { value: "0", label: "mannenlijk" },
        { value: "1", label: "vrouwelijk" }
      ],
      constraints: [
        {
          targetFieldName: "salutation",
          executeValues: [
            { srcValue: "0", targetValue: "0" },
            { srcValue: "1", targetValue: "1" }
          ]
        }
      ]
    },
    { type: "control", name: "age", label: "leeftijd", inputType: "number" },
    {
      type: "control",
      name: "agbAccepted",
      label: "Werkt dit zo dan?",
      inputType: "checkbox"
    },
    {
      type: "control",
      name: "salutation",
      label: "Aanspreking",
      inputType: "dropdown",
      lookups: [
        { value: "", label: "empty" },
        { value: "0", label: "Heer" },
        { value: "1", label: "Mevrouw" }
      ]
    },
    {
      type: "control",
      name: "test",
      label: "test",
      inputType: "autocomplete",
      placeHolder: "voornaam"
    }
  ];

  ngOnInit() {}
}
