import { Component, OnInit } from '@angular/core';
// form
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setUserInfo } from 'src/app/storage/userInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName: ['', [
      Validators.required,
      // Validators.minLength(3),
      Validators.pattern(/^[1][3,4,5,7,8,9][0-9]{9}$/) // 验证手机号
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/) // 验证只有字母和数字
    ]],
  });
  // 表单验证不通过时显示的错误消息
  formErrors = {
    userName: '',
    password: ''
  };
  // 为每一项表单验证添加说明文字
  validMes = {
    userName: {
      // minlength: '请输入3个数字', // 用的Validators里面的要用小写，用来测试
      required: '请填写用户名',
      pattern: '用户名格式是电话号码',
      // notdown: '用户名不能以下划线开头',
      // only: '用户名只能包含数字、字母、下划线'
    },
    password: {
      required: '请输入密码',
      pattern: '密码必须为数字和字母组合'
    }
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit(): void {
    // 每次表单数据发生变化的时候更新错误信息
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }
  // 每次数据发生改变时触发此方法
  onValueChanged(data?: any): void {
    const form = this.loginForm;
    if (!form) { return; }
    // 遍历错误消息对象
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field); // 获取当前表单的控件,有一些value，valid的问题
      // 当前表单存在此空间控件 && 此控件没有被修改 && 此控件验证不通过
      if (control && control.dirty && !control.valid && control.errors) {
        const messages = this.validMes[field];
        // tslint:disable-next-line: forin
        for (const key in control.errors) {
          // 把所有验证不通过项的说明文字拼接成错误消息
          this.formErrors[field] += `${messages[key]};`;
        }
      }

    }
  }
  onSubmit(): void {
    const userInfo = {
      userName: this.loginForm.value.userName
    };
    setUserInfo(userInfo);
    // 跳转路径 实现的是动态跳转数据
    this.router.navigate(['/staffList'], { queryParams: { ...userInfo } });
  }

}
