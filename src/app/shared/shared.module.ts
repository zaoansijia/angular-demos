import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CustomerDesignDirective } from './directives/customer-design.directive';
import { PriceTransformPipe } from './pipes/price-transform.pipe';

@NgModule({
  declarations: [
    PriceTransformPipe, // 管道
    CustomerDesignDirective, // 指令
  ],
  imports: [],
  // module这里只是做SharedMoudule的化不需要写在imports里面，直接导出就可以，但管道和指令必须在decalations里面声明
  exports: [
    CommonModule, // 公用commonModule
    ReactiveFormsModule, // 使用formGroup时需引入(响应式表单 formBuilder)
    FormsModule, // form表单（模板驱动表单ngModule）
    TranslateModule, // 导出国际化
    PriceTransformPipe, // 管道
    CustomerDesignDirective, // 指令
  ],
})
export class SharedModule { }
