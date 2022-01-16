import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RequestService } from '../sevice/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  response: any[] = [];

  constructor(public request: RequestService) {

  }


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
    this.request.get(`${environment.url}/people`).subscribe(
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
      this.request.delete(`${environment.url}/people/${id}`).subscribe(() => {
        this.getMembers()
      })
    }
  }

}
