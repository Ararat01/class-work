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
    age: new FormControl(''),
    email: new FormControl('', Validators.email),
    // phone: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    gender: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)])
  })

  formopen: Boolean = false
  currId: number = 0
  constructor() { }

  ngOnInit(): void {
    // this.form.setValue({
    //   first_name: 'Name',
    //   last_name: 'Lname',
    //   email: 'email',
    //   age: 17,
    //   phone: '59128411'
    // })
    // this.form.patchValue({
    //   email: 'test'
    // })
  }

  // resetForm() {
  //   this.form.reset({})
  // }

  members = [
    { id: 1, name: 'Mike', lastname: 'Smith', age: 18, gender: 'Male', email: 'mike@gmail.com' },
    { id: 2, name: 'Emily', lastname: 'Johnson', age: 19, gender: 'Female', email: 'emily@gmail.com' },
    { id: 3, name: 'John', lastname: 'Williams', age: 15, gender: 'Male', email: 'john@gmail.com' },
    { id: 4, name: 'Robert', lastname: 'Brown', age: 17, gender: 'Male', email: 'robert@gmail.com' },
    { id: 5, name: 'Emma', lastname: 'Jones', age: 22, gender: 'Female', email: 'emma@gmail.com' },
    { id: 6, name: 'William', lastname: 'Miller', age: 30, gender: 'Male', email: 'william@gmail.com' },
    { id: 7, name: 'David', lastname: 'Davis', age: 26, gender: 'Male', email: 'david@gmail.com' },
    { id: 8, name: 'Ava', lastname: 'Garcia', age: 23, gender: 'Female', email: 'ava@gmail.com' },
    { id: 9, name: 'Ann', lastname: 'Rodriguez', age: 20, gender: 'Female', email: 'joseph@gmail.com' },
    { id: 10, name: 'Thomas', lastname: 'Wilson', age: 28, gender: 'Male', email: 'thomas@gmail.com' },
  ]
  openOrClose(memId: number) {
    this.form.setValue({
      first_name: this.members[memId]["name"],
      last_name: this.members[memId]["lastname"],
      email: this.members[memId]["email"],
      age: this.members[memId]["age"],
      gender: this.members[memId]["gender"]
    })
    this.formopen = true
    this.currId = memId
  }
  editor(id: number): void {
    this.members[id]['name'] = this.form.value['first_name']
    this.members[id]['lastname'] = this.form.value['last_name']
    this.members[id]['age'] = this.form.value['age']
    this.members[id]['gender'] = this.form.value['gender']
    this.members[id]['email'] = this.form.value['email']
    this.formopen = false
  }
  delete(index: number) {
    this.formopen = false
    this.members.splice(index, 1)
  }
}