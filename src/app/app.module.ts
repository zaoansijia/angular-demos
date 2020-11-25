
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginGuard } from './pages/login/login.guard';

// mock
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/staff-mock-data.service';
// AoT
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
};

// 页面路由
const myRouter: Routes = [
  {
    path: 'login',
    // component: LoginComponent
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  // 懒加载的模式，不需要component替代为loadChildren 配合子module的forChild使用
  {
    path: 'staffList',
    loadChildren: () => import('./pages/staff-list/staff-list.module').then(m => m.StaffListModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
// ngModule装饰器，和元数据
@NgModule({
  // 声明组件，管道，指令
  declarations: [
    AppComponent,
  ],
  // 引入需要的一些服务
  imports: [
    BrowserModule, // 浏览器module，必填
    HttpClientModule, // 需要用http请求的时候导入
    FormsModule, // form表单（模板驱动表单ngModule）
    // 国际化处理
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        },
        defaultLanguage: 'en'
      }
    ),
    // mock数据，数据拦截
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    // 路由
    RouterModule.forRoot(myRouter),
  ],
  providers: [], // 一些服务
  bootstrap: [AppComponent] // 根目录渲染
})
export class AppModule { }
