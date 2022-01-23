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
    firstName: ['', Validators.required],
    lastName: '',
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
    this.request.post(`${environment.url}/members`, this.form.value).subscribe((res) => {
      this.getMembers()
    })
  }
}
