import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RequestService } from '../sevice/request.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('cild') child: any

  html: number = 2


  response: any[] = [];

  editForm = false
  
  currentId!: number;

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: '',
    age: '',
    email: '',
    gender: ''
  })

  form_edit = this.fb.group({
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

  ngAfterViewInit():void {
    console.log(this.child.str);
  }

  repeatStr(e: any) {
    this.html = e * 2
    
  }

  getMembers() {
    this.request.get(`${environment.url}/members`).subscribe(
      (res: any) => {
        this.response = res
      }, 
      err => console.log(err.message)
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
      this.form.reset()
    })
  }
  editMemberForm(member: any) {
    this.editForm = true;
    this.form_edit.patchValue(member);
    this.currentId = member.id
  }

  editMember() {
    this.request.put(`${environment.url}/members/${this.currentId}`, this.form_edit.value).subscribe((res) => {
      this.getMembers()
      this.form_edit.reset()
        this.editForm = false;
    })
    
  }
}
