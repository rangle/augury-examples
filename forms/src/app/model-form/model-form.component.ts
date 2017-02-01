import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  fg: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.fg = formBuilder.group({
      'name': 'Tammy',
      'surname': 'Trinh',
      'email': 'tam@york.tv',
      'gender': 'female'
    });
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(JSON.stringify(value));
  }

}
