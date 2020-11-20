

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StaffListModule } from './pages/staff-list/staff-list.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// AoT
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
};

// 页面路由
const myRouter = [
  { path: 'login', component: LoginComponent },
  // 懒加载的模式，不需要component替代为loadChildren 配合子module的forChild使用
  {
    path: 'staff',
    loadChildren: () => import('./pages/staff-list/staff-list.module').then(m => m.StaffListModule)
  },
  // 空路由重定向到login
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    ),
    FormsModule, // form表单
    ReactiveFormsModule, // 使用formGroup时需引入
    StaffListModule,
    RouterModule.forRoot(myRouter),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
