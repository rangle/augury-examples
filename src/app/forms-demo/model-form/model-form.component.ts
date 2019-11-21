import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  fg: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.fg = formBuilder.group({
      'name': ['Tammy', Validators.required],
      'surname': ['Trinh', Validators.required],
      'email': ['tam@york.tv', Validators.required],
      'gender': ['female', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(JSON.stringify(value));
  }

}
