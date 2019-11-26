import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  fg = this.formBuilder.group({
    name: ['Tammy', Validators.required],
    surname: ['Trinh', Validators.required],
    email: ['tam@york.tv', Validators.required],
    gender: ['female', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.fg);
    console.log(this.fg.value);
  }

}
