import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl(''),
    email: new FormControl('', Validators.email),
    age: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
  })

  constructor() { }

  ngOnInit(): void {
    this.form.setValue({
      first_name: 'Name',
      last_name: 'Lname',
      email: 'email',
      age: 17,
      phone: '59128411'
    })
    this.form.patchValue({
      email: 'test'
    })
  }

  send() {
    console.table(this.form.value);
    console.log(this.form.get('email'))
    // this.resetForm()
  }

  resetForm() {
    this.form.reset({})
  }
}