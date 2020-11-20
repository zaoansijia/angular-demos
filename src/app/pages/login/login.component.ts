import { Component, OnInit } from '@angular/core';
// form
import {FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.loginForm, 'form');
    // 跳转路径 实现的是动态跳转数据
    this.router.navigate(['/staff'], {queryParams: {userName: this.loginForm.value.userName}});
  }

}