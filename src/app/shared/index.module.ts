import { PriceTransformPipe } from 'src/app/shared/pipes/price-transform.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDesignDirective } from './directives/customer-design.directive';

@NgModule({
  declarations: [
    PriceTransformPipe, // 管道
    CustomerDesignDirective, // 指令
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PriceTransformPipe, // 管道
    CustomerDesignDirective, // 指令
  ],
})
export class IndexModule { }
