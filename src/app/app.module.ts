import { MockModule } from './mock/mock.module';
import { AppRouteModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
};

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
    MockModule, // mock数据，数据拦
    AppRouteModule, // 路由
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
  ],
  providers: [], // 一些服务
  bootstrap: [AppComponent] // 根目录渲染
})
export class AppModule { }
