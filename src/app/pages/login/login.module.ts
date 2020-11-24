import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { IndexModule } from './../../shared/index.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDesignDirective } from 'src/app/shared/directives/customer-design.directive';
// import { PriceTransformPipe } from 'src/app/shared/pipes/price-transform.pipe';
// AoT
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
};



@NgModule({
  declarations: [
    LoginComponent,
    // CustomerDesignDirective,
  ],
  imports: [
    CommonModule,
    IndexModule,
    FormsModule, // form表单（模板驱动表单ngModule）
    ReactiveFormsModule, // 使用formGroup时需引入(响应式表单 formBuilder)
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    }
    ),
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ])
  ],
  exports:[]
})
export class LoginModule { }
