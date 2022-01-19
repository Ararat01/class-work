import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RequestService } from '../sevice/request.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  response: any[] = [];

  form = this.fb.group({
    first_name: ['', Validators.required],
    last_name: '',
    age: '',
    email: '',
    gender: ''
  })

  constructor(public request: RequestService, public fb: FormBuilder) {}


  ngOnInit(): void {

    // this.request.get('assets/sample4.json').subscribe(
    //   res => console.log(res), 
    //   err => console.log(err.message),
    //   () => console.log('finished')   
    // )

    // this.request.get('https://jsonplaceholder.typicode.com/posts').subscribe(
    //   res => console.log(res), 
    //   err => console.log(err.message),
    //   () => console.log('finished')   
    // )

    this.getMembers()
  }

  getMembers() {
    this.request.get(`${environment.url}/members`).subscribe(
      (res: any) => {
        console.log(res)
        this.response = res
      }, 
      err => console.log(err.message),
      () => console.log('finished')   
    )
  }

  deleteMember(id: number) {
    if(confirm('Are u sure?')) {
      this.request.delete(`${environment.url}/members/${id}`).subscribe(() => {
        this.getMembers()
      })
    }
  }


  addUser() {
    const user = {
      firstName: this.form.value['first_name'],
      lastName: this.form.value['last_name'],
      age: this.form.value['age'],
      gender: this.form.value['gender'],
      email: this.form.value['email'],
    }
    this.request.post(`${environment.url}/members`, user).subscribe((res) => {
      console.log(res);
      this.getMembers()
    })
  }
}
