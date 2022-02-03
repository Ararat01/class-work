import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    login: '',
    passwordd: ''
  })

  login() {
    localStorage.setItem('token', 'dwabnav4a1fe89b149a4bf89+e1a4')
    this.route.navigateByUrl('/profile')
  }

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
}